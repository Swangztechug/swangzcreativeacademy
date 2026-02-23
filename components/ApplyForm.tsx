"use client";

import { useState } from "react";

export function ApplyForm({
  courseOptions,
  preselectedCourse,
  fixedCourse = false,
}: {
  courseOptions: string[];
  preselectedCourse?: string;
  /** When true, course is fixed (e.g. on a course page); hide dropdown and always send this course. */
  fixedCourse?: boolean;
}) {
  const initialCourse = preselectedCourse ?? courseOptions[0] ?? "";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(initialCourse);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, course, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        return;
      }
      setSent(true);
      setName("");
      setEmail("");
      setPhone("");
      if (!fixedCourse) setCourse(courseOptions[0] ?? "");
      setMessage("");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="bg-gold/20 border border-gold text-white rounded-2xl p-6 text-center">
        <p className="font-semibold">Application submitted.</p>
        <p className="text-sm text-gray-300 mt-1">
          We&apos;ll contact you at {email} about next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Full name *
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-gold"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Email *
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-gold"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Phone
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-gold"
          placeholder="+256 ..."
        />
      </div>
      {!fixedCourse && (
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Course *
          </label>
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
            className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold"
          >
            {courseOptions.map((title) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>
      )}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Message
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-gold resize-y"
          placeholder="Why you want to join, experience, etc."
        />
      </div>
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gold hover:bg-gold-dark text-dark font-semibold py-3 rounded-xl transition-colors disabled:opacity-50"
      >
        {loading ? "Submitting…" : "Submit application"}
      </button>
    </form>
  );
}
