"use client";

import type { SiteContent } from "@/lib/types";
import { ImageField } from "./ImageField";

export function TutorsEditor({
  data,
  onChange,
}: {
  data: SiteContent["tutors"];
  onChange: (data: SiteContent["tutors"]) => void;
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">Tutors</h2>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Title</label>
        <input
          type="text"
          value={data.title}
          onChange={(e) => onChange({ ...data, title: e.target.value })}
          className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Subtitle</label>
        <input
          type="text"
          value={data.subtitle}
          onChange={(e) => onChange({ ...data, subtitle: e.target.value })}
          className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
        />
      </div>
      {data.items.map((tutor, i) => (
        <div key={i} className="border border-dark-border rounded-xl p-4 space-y-4">
          <h3 className="text-gold font-medium">Tutor {i + 1}</h3>
          <ImageField
            label="Photo"
            value={tutor.image}
            onChange={(image) => {
              const items = [...data.items];
              items[i] = { ...items[i], image };
              onChange({ ...data, items });
            }}
          />
          <input
            type="text"
            placeholder="Name"
            value={tutor.name}
            onChange={(e) => {
              const items = [...data.items];
              items[i] = { ...items[i], name: e.target.value };
              onChange({ ...data, items });
            }}
            className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
          />
          <input
            type="text"
            placeholder="Role"
            value={tutor.role}
            onChange={(e) => {
              const items = [...data.items];
              items[i] = { ...items[i], role: e.target.value };
              onChange({ ...data, items });
            }}
            className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
          />
          <textarea
            placeholder="Bio"
            value={tutor.bio}
            onChange={(e) => {
              const items = [...data.items];
              items[i] = { ...items[i], bio: e.target.value };
              onChange({ ...data, items });
            }}
            rows={2}
            className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
          />
          <div>
            <label className="block text-sm text-gray-400 mb-1">Courses (one per line)</label>
            <textarea
              value={tutor.courses.join("\n")}
              onChange={(e) => {
                const items = [...data.items];
                items[i] = {
                  ...items[i],
                  courses: e.target.value.split("\n").map((s) => s.trim()).filter(Boolean),
                };
                onChange({ ...data, items });
              }}
              rows={3}
              className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Badges (comma-separated)</label>
            <input
              type="text"
              value={tutor.badges.join(", ")}
              onChange={(e) => {
                const items = [...data.items];
                items[i] = {
                  ...items[i],
                  badges: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                };
                onChange({ ...data, items });
              }}
              className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
