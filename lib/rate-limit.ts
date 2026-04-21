/**
 * In-memory rate limiter. For multi-instance production, use Redis or edge rate limiting.
 * Keys are cleared after windowMs so memory doesn't grow indefinitely.
 */

const store = new Map<string, { count: number; resetAt: number }>();

const DEFAULT_WINDOW_MS = 60 * 1000; // 1 minute
const DEFAULT_MAX = 10;

export function getClientIdentifier(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : null;
  return ip || "unknown";
}

export function rateLimit(options: {
  key: string;
  windowMs?: number;
  max?: number;
}): { limited: boolean; retryAfter?: number } {
  const windowMs = options.windowMs ?? DEFAULT_WINDOW_MS;
  const max = options.max ?? DEFAULT_MAX;
  const now = Date.now();
  const entry = store.get(options.key);

  if (!entry) {
    store.set(options.key, { count: 1, resetAt: now + windowMs });
    return { limited: false };
  }

  if (now >= entry.resetAt) {
    store.set(options.key, { count: 1, resetAt: now + windowMs });
    return { limited: false };
  }

  entry.count += 1;
  if (entry.count > max) {
    const retryAfter = Math.ceil((entry.resetAt - now) / 1000);
    return { limited: true, retryAfter };
  }
  return { limited: false };
}

// Clean old keys periodically
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    Array.from(store.entries()).forEach(([k, v]) => {
      if (now >= v.resetAt) store.delete(k);
    });
  }, 60 * 1000);
}
