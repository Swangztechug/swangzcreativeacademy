"use client";

import { useState } from "react";

export function ContactPageClient({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        return;
      }
      setSent(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-[85%] mx-auto px-6 md:px-10 py-20">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <p className="text-gray-400 mb-10">{subtitle}</p>

        {sent ? (
          <div className="bg-gold/20 border border-gold text-white rounded-2xl p-6 text-center">
            <p className="font-semibold">Message sent.</p>
            <p className="text-sm text-gray-300 mt-1">
              We&apos;ll reply to {email} when we can.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Name *
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
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-gold"
                placeholder="What is this about?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Message *
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-gold resize-y"
                placeholder="Your message..."
              />
            </div>
            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gold hover:bg-gold-dark text-dark font-semibold py-3 rounded-xl transition-colors disabled:opacity-50"
            >
              {loading ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
