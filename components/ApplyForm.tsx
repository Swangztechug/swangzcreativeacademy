"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function ApplyForm() {
  const searchParams = useSearchParams();
  const courseParam =
    searchParams.get("course") ?? searchParams.get("program") ?? "";
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document.getElementById("applySuccess")?.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "start",
      });
    }
  }, [success]);

  return (
    <>
      <div
        id="applySuccess"
        className={`rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-950 ${success ? "" : "hidden"}`}
      >
        <p className="text-sm font-semibold">Application received (demo).</p>
        <p className="mt-2 text-sm text-emerald-900/90">
          We’ll email you within 1–2 business days with next steps. In the meantime, you can{" "}
          <Link href="/courses" className="font-semibold underline underline-offset-4">
            browse courses
          </Link>{" "}
          or{" "}
          <Link href="/blog" className="font-semibold underline underline-offset-4">
            read the blog
          </Link>
          .
        </p>
      </div>

      <form
        id="applyForm"
        className={`mt-8 grid gap-5 ${success ? "hidden" : ""}`}
        onSubmit={(e) => {
          e.preventDefault();
          setSuccess(true);
        }}
      >
        <input type="hidden" name="course" value={courseParam} readOnly />

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
              required
              className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none placeholder:text-zinc-400 focus:border-zinc-400"
              placeholder="Jane"
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
              required
              className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none placeholder:text-zinc-400 focus:border-zinc-400"
              placeholder="Doe"
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
            required
            className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none placeholder:text-zinc-400 focus:border-zinc-400"
            placeholder="you@domain.com"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="level" className="text-sm font-medium text-zinc-900">
              Current level
            </label>
            <select
              id="level"
              name="level"
              className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none focus:border-zinc-400"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div>
            <label htmlFor="schedule" className="text-sm font-medium text-zinc-900">
              Weekly time
            </label>
            <select
              id="schedule"
              name="schedule"
              className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none focus:border-zinc-400"
            >
              <option>2–4 hours</option>
              <option>4–6 hours</option>
              <option>6–10 hours</option>
              <option>10+ hours</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="portfolio" className="text-sm font-medium text-zinc-900">
            Portfolio (optional)
          </label>
          <input
            id="portfolio"
            name="portfolio"
            type="url"
            className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none placeholder:text-zinc-400 focus:border-zinc-400"
            placeholder="https://"
          />
        </div>

        <div>
          <label htmlFor="goals" className="text-sm font-medium text-zinc-900">
            What do you want to make?
          </label>
          <textarea
            id="goals"
            name="goals"
            rows={6}
            required
            className="mt-2 w-full resize-none rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none placeholder:text-zinc-400 focus:border-zinc-400"
            placeholder="Tell us about the kind of work you want to create…"
          />
        </div>

        <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-500">
            By applying, you agree to our{" "}
            <Link href="/contact" className="underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-500">
              terms
            </Link>
            .
          </p>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
          >
            Submit application
          </button>
        </div>
      </form>
    </>
  );
}
