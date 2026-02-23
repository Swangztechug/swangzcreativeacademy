import { cookies } from "next/headers";
import crypto from "crypto";

const COOKIE_NAME = "admin_session";

function getSecret(): string {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error("AUTH_SECRET must be set");
  return secret;
}

export function signToken(payload: { sub: string; email: string }): string {
  const secret = getSecret();
  const data = JSON.stringify(payload);
  const base = Buffer.from(data, "utf-8").toString("base64url");
  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(base);
  const sig = hmac.digest("hex");
  return `${base}.${sig}`;
}

export function verifyToken(
  token: string | undefined
): { sub: string; email: string } | null {
  if (!token) return null;
  const [base, sig] = token.split(".");
  if (!base || !sig) return null;
  const secret = getSecret();
  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(base);
  const expectedSig = hmac.digest("hex");
  if (
    !crypto.timingSafeEqual(
      Buffer.from(sig, "utf-8"),
      Buffer.from(expectedSig, "utf-8")
    )
  ) {
    return null;
  }
  const json = Buffer.from(base, "base64url").toString("utf-8");
  return JSON.parse(json) as { sub: string; email: string };
}

export async function isAdmin(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  return !!verifyToken(token);
}

export function getCookieHeader(payload: { sub: string; email: string }): string {
  const token = signToken(payload);
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  return `${COOKIE_NAME}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400${secure}`;
}
