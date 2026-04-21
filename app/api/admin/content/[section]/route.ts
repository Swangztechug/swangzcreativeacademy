import { NextRequest, NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import {
  getSection,
  updateSection,
  type ContentSectionKey,
} from "@/lib/content";

const SECTION_KEYS: ContentSectionKey[] = [
  "site",
  "hero",
  "skills",
  "team",
  "faqs",
  "careers",
  "testimonials",
  "blog",
  "courses",
  "tutors",
  "about",
  "contactPage",
  "applyPage",
  "footer",
];

function parseSection(param: string | undefined): ContentSectionKey | null {
  if (!param) return null;
  const key = param.toLowerCase();
  return SECTION_KEYS.includes(key as ContentSectionKey)
    ? (key as ContentSectionKey)
    : null;
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ section: string }> }
) {
  const ok = await isAdmin();
  if (!ok) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { section: param } = await params;
  const section = parseSection(param);
  if (!section) {
    return NextResponse.json(
      { error: "Invalid section", valid: SECTION_KEYS },
      { status: 400 }
    );
  }
  const data = await getSection(section);
  return NextResponse.json(data);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ section: string }> }
) {
  const ok = await isAdmin();
  if (!ok) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { section: param } = await params;
  const section = parseSection(param);
  if (!section) {
    return NextResponse.json(
      { error: "Invalid section", valid: SECTION_KEYS },
      { status: 400 }
    );
  }
  const body = (await request.json()) as Record<string, unknown>;
  await updateSection(section, body);
  return NextResponse.json({ success: true });
}
