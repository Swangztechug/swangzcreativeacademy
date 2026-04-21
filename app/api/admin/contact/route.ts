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
      `SELECT id, name, email, subject, message, created_at, read
       FROM contact_submissions
       ORDER BY created_at DESC`
    );
    return NextResponse.json(result.rows);
  } catch (err) {
    console.error("Admin contact list error:", err);
    return NextResponse.json(
      { error: "Failed to load submissions" },
      { status: 500 }
    );
  }
}
