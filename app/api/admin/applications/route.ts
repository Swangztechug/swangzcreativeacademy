import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { getDb } from "@/lib/db";

export async function GET() {
  const ok = await isAdmin();
  if (!ok) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const db = getDb();
    const result = await db.query(
      `SELECT id, name, email, phone, course, message, status, created_at
       FROM course_applications
       ORDER BY created_at DESC`
    );
    return NextResponse.json(result.rows);
  } catch (err) {
    console.error("Admin applications list error:", err);
    return NextResponse.json(
      { error: "Failed to load applications" },
      { status: 500 }
    );
  }
}
