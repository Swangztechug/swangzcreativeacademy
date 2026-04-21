import { NextRequest, NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { getDb } from "@/lib/db";

const VALID_STATUSES = ["pending", "accepted", "rejected"];

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const ok = await isAdmin();
  if (!ok) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const id = (await params).id;
  const numId = parseInt(id, 10);
  if (Number.isNaN(numId)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  const body = await request.json().catch(() => ({}));
  const status = (body.status as string)?.toLowerCase();
  if (!status || !VALID_STATUSES.includes(status)) {
    return NextResponse.json(
      { error: "Invalid status. Use: pending, accepted, rejected" },
      { status: 400 }
    );
  }

  try {
    const db = getDb();
    await db.query(
      "UPDATE course_applications SET status = $1 WHERE id = $2",
      [status, numId]
    );
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Admin application update error:", err);
    return NextResponse.json(
      { error: "Failed to update" },
      { status: 500 }
    );
  }
}
