"use client";

import { useEffect, useState } from "react";

type Submission = {
  id: number;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  created_at: string;
  read: boolean;
};

export function ContactSubmissions() {
  const [list, setList] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/contact", { credentials: "include" })
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setList(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  async function markRead(id: number) {
    await fetch(`/api/admin/contact/${id}`, {
      method: "PATCH",
      credentials: "include",
    });
    setList((prev) =>
      prev.map((s) => (s.id === id ? { ...s, read: true } : s))
    );
  }

  if (loading) return <p className="text-gray-400">Loading submissions…</p>;
  if (list.length === 0) {
    return (
      <p className="text-gray-400">No contact form submissions yet.</p>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-400">{list.length} submission(s)</p>
      <div className="space-y-3">
        {list.map((s) => (
          <div
            key={s.id}
            className={`border rounded-xl p-4 ${
              s.read ? "border-dark-border bg-dark" : "border-gold/50 bg-dark-card"
            }`}
          >
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white">
                  {s.name}
                  {!s.read && (
                    <span className="ml-2 text-xs text-gold">New</span>
                  )}
                </p>
                <p className="text-sm text-gray-400">{s.email}</p>
                {s.subject && (
                  <p className="text-sm text-gray-300 mt-1">Re: {s.subject}</p>
                )}
                <p className="text-sm text-gray-300 mt-2 whitespace-pre-wrap">
                  {s.message}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  {new Date(s.created_at).toLocaleString()}
                </p>
              </div>
              {!s.read && (
                <button
                  type="button"
                  onClick={() => markRead(s.id)}
                  className="text-xs text-gold hover:underline"
                >
                  Mark read
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
