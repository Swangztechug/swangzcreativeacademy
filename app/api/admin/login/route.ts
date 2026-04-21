import { NextRequest, NextResponse } from "next/server";
import { getCookieHeader } from "@/lib/auth";
import { getDb } from "@/lib/db";
import { getClientIdentifier, rateLimit } from "@/lib/rate-limit";
import { validation, isValidEmail } from "@/lib/validate";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const key = `login:${getClientIdentifier(request)}`;
    const { limited, retryAfter } = rateLimit({ key, max: 10, windowMs: 60 * 1000 });
    if (limited) {
      return NextResponse.json(
        { error: "Too many attempts. Try again later." },
        { status: 429, headers: retryAfter ? { "Retry-After": String(retryAfter) } : undefined }
      );
    }

    const body = await request.json().catch(() => ({}));
    const email = validation.email((body.email as string)?.toLowerCase());
    const password = typeof body.password === "string" ? body.password : "";
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const db = getDb();
    const result = await db.query(
      "SELECT id, email, password_hash FROM admin_users WHERE LOWER(email) = $1 LIMIT 1",
      [email]
    );
    const row = result.rows[0] as
      | { id: string | number; email: string; password_hash: string }
      | undefined;

    if (!row) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const match = await bcrypt.compare(password, row.password_hash);
    if (!match) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const res = new NextResponse(null, { status: 200 });
    res.headers.set(
      "Set-Cookie",
      getCookieHeader({ sub: String(row.id), email: row.email })
    );
    return res;
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json(
      { error: "Login failed. Try again." },
      { status: 500 }
    );
  }
}
