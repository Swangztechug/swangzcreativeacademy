import { NextRequest, NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { getContent, saveContent } from "@/lib/content";
import type { SiteContent } from "@/lib/types";

export async function GET() {
  const content = await getContent();
  return NextResponse.json(content);
}

export async function POST(request: NextRequest) {
  const ok = await isAdmin();
  if (!ok) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = (await request.json()) as SiteContent;
  await saveContent(body);
  return NextResponse.json({ success: true });
}
