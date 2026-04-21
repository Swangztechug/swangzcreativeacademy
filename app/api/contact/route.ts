import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { getClientIdentifier, rateLimit } from "@/lib/rate-limit";
import { validation, isValidEmail } from "@/lib/validate";

export async function POST(request: NextRequest) {
  try {
    const key = `contact:${getClientIdentifier(request)}`;
    const { limited, retryAfter } = rateLimit({ key, max: 5, windowMs: 60 * 1000 });
    if (limited) {
      return NextResponse.json(
        { error: "Too many submissions. Try again later." },
        { status: 429, headers: retryAfter ? { "Retry-After": String(retryAfter) } : undefined }
      );
    }

    const body = await request.json().catch(() => ({}));
    const name = validation.name(body.name);
    const email = validation.email(body.email);
    const subject = validation.subject(body.subject);
    const message = validation.message(body.message);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
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
      `INSERT INTO contact_submissions (name, email, subject, message)
       VALUES ($1, $2, $3, $4)`,
      [name, email, subject || "(No subject)", message]
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Could not send message. Try again later." },
      { status: 500 }
    );
  }
}
