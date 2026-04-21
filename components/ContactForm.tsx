"use client";

import Link from "next/link";
import { useState } from "react";

const DEFAULT_PHONE_PLACEHOLDER = "+256 700 000 000";

export function ContactForm({
  phonePlaceholder = DEFAULT_PHONE_PLACEHOLDER,
}: {
  phonePlaceholder?: string;
} = {}) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-950">
        <p className="text-sm font-semibold">Message sent (demo).</p>
        <p className="mt-2 text-sm text-emerald-900/90">
          We’ll get back within 1–2 business days. You can also browse{" "}
          <Link href="/courses" className="font-semibold underline">
            courses
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      className="mt-8 grid gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="text-sm font-medium text-zinc-900">
            First name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            placeholder="Jane"
            required
            className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none placeholder:text-zinc-400 focus:border-zinc-400"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="text-sm font-medium text-zinc-900">
            Last name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            placeholder="Doe"
            required
            className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none placeholder:text-zinc-400 focus:border-zinc-400"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-zinc-900">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@domain.com"
          required
          className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none placeholder:text-zinc-400 focus:border-zinc-400"
        />
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-medium text-zinc-900">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder={phonePlaceholder}
          required
          className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none placeholder:text-zinc-400 focus:border-zinc-400"
        />
      </div>
      <div>
        <label htmlFor="topic" className="text-sm font-medium text-zinc-900">
          Topic
        </label>
        <select
          id="topic"
          name="topic"
          className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none focus:border-zinc-400"
        >
          <option>Admissions</option>
          <option>Pricing</option>
          <option>Partnerships</option>
          <option>Technical support</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-zinc-900">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell us what you’re trying to achieve…"
          required
          className="mt-2 w-full resize-none rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none placeholder:text-zinc-400 focus:border-zinc-400"
        />
      </div>
      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-zinc-500">
          By sending this, you agree to our{" "}
          <Link href="/contact" className="underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-500">
            terms
          </Link>
          .
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
        >
          Send message
        </button>
      </div>
    </form>
  );
}
