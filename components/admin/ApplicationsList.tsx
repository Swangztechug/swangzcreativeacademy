"use client";

import { useEffect, useState } from "react";

type Application = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  course: string;
  message: string | null;
  status: string;
  created_at: string;
};

const STATUS_OPTIONS = ["pending", "accepted", "rejected"];

export function ApplicationsList() {
  const [list, setList] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/applications", { credentials: "include" })
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setList(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  async function updateStatus(id: number, status: string) {
    await fetch(`/api/admin/applications/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ status }),
    });
    setList((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a))
    );
  }

  if (loading) return <p className="text-gray-400">Loading applications…</p>;
  if (list.length === 0) {
    return (
      <p className="text-gray-400">No course applications yet.</p>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-400">{list.length} application(s)</p>
      <div className="space-y-3">
        {list.map((a) => (
          <div
            key={a.id}
            className="border border-dark-border rounded-xl p-4 bg-dark"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white">{a.name}</p>
                <p className="text-sm text-gray-400">{a.email}</p>
                {a.phone && (
                  <p className="text-sm text-gray-400">{a.phone}</p>
                )}
                <p className="text-sm text-gold mt-1">{a.course}</p>
                {a.message && (
                  <p className="text-sm text-gray-300 mt-2 whitespace-pre-wrap">
                    {a.message}
                  </p>
                )}
                <p className="text-xs text-gray-500 mt-2">
                  {new Date(a.created_at).toLocaleString()}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <select
                  value={a.status}
                  onChange={(e) => updateStatus(a.id, e.target.value)}
                  className="bg-dark-card border border-dark-border rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-gold"
                >
                  {STATUS_OPTIONS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
