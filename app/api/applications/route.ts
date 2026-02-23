import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { getClientIdentifier, rateLimit } from "@/lib/rate-limit";
import { validation, isValidEmail } from "@/lib/validate";

export async function POST(request: NextRequest) {
  try {
    const key = `apply:${getClientIdentifier(request)}`;
    const { limited, retryAfter } = rateLimit({ key, max: 5, windowMs: 60 * 1000 });
    if (limited) {
      return NextResponse.json(
        { error: "Too many applications. Try again later." },
        { status: 429, headers: retryAfter ? { "Retry-After": String(retryAfter) } : undefined }
      );
    }

    const body = await request.json().catch(() => ({}));
    const name = validation.name(body.name);
    const email = validation.email(body.email);
    const phone = validation.phone(body.phone);
    const course = validation.course(body.course);
    const message = validation.message(body.message);

    if (!name || !email || !course) {
      return NextResponse.json(
        { error: "Name, email, and course are required" },
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
    await db.query(
      `INSERT INTO course_applications (name, email, phone, course, message)
       VALUES ($1, $2, $3, $4, $5)`,
      [name, email, phone || null, course, message || null]
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Application submit error:", err);
    return NextResponse.json(
      { error: "Could not submit application. Try again later." },
      { status: 500 }
    );
  }
}
