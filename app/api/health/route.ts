import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export const dynamic = "force-dynamic";
export const revalidate = 0;

/**
 * GET /api/health - for load balancers and uptime checks.
 * Returns 200 if the app and database are reachable.
 */
export async function GET() {
  try {
    const db = getDb();
    await db.query("SELECT 1");
    return NextResponse.json({ status: "ok", database: "connected" });
  } catch (err) {
    return NextResponse.json(
      { status: "error", database: "disconnected" },
      { status: 503 }
    );
  }
}
