"use client";

import { useRef, useState } from "react";

export function ImageField({
  value,
  onChange,
  label,
  compact,
  showUploadHint,
}: {
  value: string;
  onChange: (url: string) => void;
  label?: string;
  /** If true, smaller layout for table cells */
  compact?: boolean;
  /** If true, show a short hint that upload is available (e.g. for new posts) */
  showUploadHint?: boolean;
}) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setProgress(0);
    setSuccess(false);
    try {
      const form = new FormData();
      form.set("file", file);
      const url = "/api/upload";
      const xhr = new XMLHttpRequest();
      await new Promise<void>((resolve, reject) => {
        xhr.upload.addEventListener("progress", (ev) => {
          if (ev.lengthComputable) {
            setProgress(Math.round((ev.loaded / ev.total) * 100));
          }
        });
        xhr.addEventListener("load", () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            try {
              const data = JSON.parse(xhr.responseText);
              if (data.url) {
                onChange(data.url);
                setProgress(100);
                setSuccess(true);
                setTimeout(() => setSuccess(false), 2000);
              }
              resolve();
            } catch {
              reject(new Error("Invalid response"));
            }
          } else {
            reject(new Error(xhr.statusText || "Upload failed"));
          }
        });
        xhr.addEventListener("error", () => reject(new Error("Network error")));
        xhr.open("POST", url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.withCredentials = true;
        xhr.send(form);
      });
    } catch {
      setSuccess(false);
    } finally {
      setUploading(false);
      setProgress(0);
      e.target.value = "";
    }
  }

  const content = (
    <>
      {label && (
        <label className={compact ? "block text-xs font-medium text-muted-foreground mb-0.5" : "block text-sm font-medium text-gray-400"}>
          {label}
        </label>
      )}
      <div className={compact ? "flex flex-col gap-1" : "flex gap-2 flex-wrap items-start"}>
        <input
          type="url"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Image URL"
          className={
            compact
              ? "w-full min-w-0 bg-background border border-input rounded px-2 py-1 text-foreground placeholder:text-muted-foreground text-xs focus:outline-none focus:ring-2 focus:ring-ring"
              : "flex-1 min-w-[200px] bg-dark border border-dark-border rounded-lg px-3 py-2 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-gold"
          }
        />
        <input
          ref={inputRef}
          type="file"
          accept="image/*,.webp,image/webp"
          onChange={handleFile}
          className="hidden"
        />
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className={
            compact
              ? "px-2 py-1 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded text-xs font-medium transition-colors disabled:opacity-50"
              : "px-4 py-2 bg-dark-border hover:bg-gold hover:text-dark rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
          }
        >
          {uploading ? `${progress}%` : success ? "Uploaded ✓" : "Upload"}
        </button>
        {showUploadHint && !value && (
          <span className="text-[10px] text-muted-foreground">URL or Upload (WebP, JPG, PNG)</span>
        )}
        {uploading && (
          <div
            className={compact ? "h-1 w-full rounded bg-secondary overflow-hidden" : "h-2 w-full max-w-xs rounded bg-dark-border overflow-hidden"}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-full bg-gold transition-[width] duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
      {value && (
        <div
            className={
            compact
              ? "relative w-14 h-14 rounded overflow-hidden bg-muted shrink-0"
              : "relative w-24 h-24 rounded-lg overflow-hidden bg-dark-border"
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={value.startsWith("/") ? value : value}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </>
  );

  if (compact) {
    return <div className="flex flex-col gap-1 min-w-0">{content}</div>;
  }
  return <div className="space-y-2">{content}</div>;
}
