import { promises as fs } from "fs";
import path from "path";
import type { SiteContent } from "./types";
import { getRedis } from "./redis";

const DATA_PATH = path.join(process.cwd(), "data", "content.json");
const CACHE_KEY = "site_content_v1";

export type ContentSectionKey =
  | "site"
  | "hero"
  | "skills"
  | "team"
  | "faqs"
  | "careers"
  | "testimonials"
  | "blog"
  | "courses"
  | "tutors"
  | "about"
  | "contactPage"
  | "applyPage"
  | "footer";

export async function getContent(): Promise<SiteContent> {
  const redis = getRedis();
  if (redis) {
    try {
      const cached = await redis.get(CACHE_KEY);
      if (cached) {
        return JSON.parse(cached) as SiteContent;
      }
    } catch {
      // ignore cache errors and fall back to file
    }
  }

  const raw = await fs.readFile(DATA_PATH, "utf-8");
  const content = JSON.parse(raw) as SiteContent;

  if (redis) {
    redis
      .set(CACHE_KEY, JSON.stringify(content))
      .catch(() => {
        // ignore cache write errors
      });
  }

  return content;
}

export async function saveContent(content: SiteContent): Promise<void> {
  await fs.writeFile(DATA_PATH, JSON.stringify(content, null, 2), "utf-8");
  const redis = getRedis();
  if (redis) {
    redis
      .set(CACHE_KEY, JSON.stringify(content))
      .catch(() => {
        // ignore cache write errors
      });
  }
}

export async function getSection(
  key: ContentSectionKey
): Promise<Record<string, unknown>> {
  const content = await getContent();
  if (key === "site") {
    return { siteName: content.siteName };
  }
  return content[key] as Record<string, unknown>;
}

export async function updateSection(
  key: ContentSectionKey,
  data: Record<string, unknown>
): Promise<void> {
  const content = await getContent();
  if (key === "site") {
    if (typeof data.siteName === "string") content.siteName = data.siteName;
  } else {
    (content as unknown as Record<string, unknown>)[key] = data;
  }
  await saveContent(content);
}
