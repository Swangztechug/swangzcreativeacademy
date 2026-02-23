"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { SiteContent } from "@/lib/types";
import { AdminEditor } from "@/components/admin/AdminEditor";
import { Button } from "@/components/ui/button";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [content, setContent] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/admin/me")
      .then((r) => r.json())
      .then((data) => {
        if (!data.admin) {
          router.replace("/admin");
          return;
        }
        return fetch("/api/admin/content").then((r) => r.json());
      })
      .then((data) => {
        if (data && !data.error) {
          const normalized: SiteContent = {
            ...data,
            contactPage: data.contactPage ?? {
              title: "Contact Us",
              subtitle:
                "Send us a message and we'll get back to you as soon as we can.",
            },
            applyPage: data.applyPage ?? {
              title: "Apply for a course",
              subtitle:
                "Fill in your details and the course you want to join. We'll get back to you with next steps.",
            },
            about: {
              ...data.about,
              statsHeading: data.about?.statsHeading ?? "Why Choose SCA?",
            },
          };
          setContent(normalized);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [router]);

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin");
  }

  async function handleSave(updated: SiteContent) {
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        setMessage(err.error || "Save failed");
        return;
      }
      setContent(updated);
      setMessage("Saved successfully.");
      setTimeout(() => setMessage(""), 3000);
    } finally {
      setSaving(false);
    }
  }

  async function handleSaveSection(
    sectionKey: string,
    data: Record<string, unknown>
  ) {
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch(`/api/admin/content/${sectionKey}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        setMessage(err.error || "Save failed");
        return;
      }
      setContent((prev) => {
        if (!prev) return prev;
        const next = { ...prev };
        if (sectionKey === "site" && typeof data.siteName === "string") {
          next.siteName = data.siteName;
        } else if (sectionKey in next) {
          (next as Record<string, unknown>)[sectionKey] = data;
        }
        return next;
      });
      setMessage("Section saved.");
      setTimeout(() => setMessage(""), 3000);
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-400">Loading…</p>
      </div>
    );
  }
  if (!content) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-400">Failed to load content.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="shrink-0 border-b border-dark-border px-6 py-4 flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-xl font-bold text-white">Edit website</h1>
        <div className="flex items-center gap-4">
          {message && (
            <span
              className={
                message.startsWith("Saved")
                  ? "text-green-400 text-sm"
                  : "text-red-400 text-sm"
              }
            >
              {message}
            </span>
          )}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </header>
      <main className="flex-1 min-w-0">
        <AdminEditor
          content={content}
          onSave={handleSave}
          onSaveSection={handleSaveSection}
          saving={saving}
        />
      </main>
    </div>
  );
}
