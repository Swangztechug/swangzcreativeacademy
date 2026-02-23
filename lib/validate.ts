/**
 * Validation helpers for API request bodies. Enforces max lengths to avoid abuse.
 */
const LIMITS = {
  name: 200,
  email: 320,
  subject: 500,
  message: 10000,
  phone: 50,
  course: 500,
} as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function trim(str: unknown, max: number): string {
  if (typeof str !== "string") return "";
  return str.trim().slice(0, max);
}

export function isValidEmail(s: string): boolean {
  return s.length > 0 && s.length <= LIMITS.email && EMAIL_REGEX.test(s);
}

export const validation = {
  name: (s: unknown) => trim(s, LIMITS.name),
  email: (s: unknown) => trim(s, LIMITS.email),
  subject: (s: unknown) => trim(s, LIMITS.subject),
  message: (s: unknown) => trim(s, LIMITS.message),
  phone: (s: unknown) => trim(s, LIMITS.phone),
  course: (s: unknown) => trim(s, LIMITS.course),
  limits: LIMITS,
};
