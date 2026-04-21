/**
 * Turns a title into a URL-safe slug (e.g. "Music Production Mastery" -> "music-production-mastery").
 */
export function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}
