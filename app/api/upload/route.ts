import { NextRequest, NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { uploadToR2 } from "@/lib/r2";

export async function POST(request: NextRequest) {
  const ok = await isAdmin();
  if (!ok) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const formData = await request.formData();
  const file = formData.get("file") as File | null;
  if (!file) {
    return NextResponse.json({ error: "No file" }, { status: 400 });
  }
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const url = await uploadToR2({
    fileName: file.name || "upload",
    contentType: file.type || null,
    bytes: buffer,
  });
  return NextResponse.json({ url });
}
