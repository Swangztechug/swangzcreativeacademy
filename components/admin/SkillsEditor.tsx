"use client";

import type { SiteContent } from "@/lib/types";
import { ImageField } from "./ImageField";

export function SkillsEditor({
  data,
  onChange,
}: {
  data: SiteContent["skills"];
  onChange: (data: SiteContent["skills"]) => void;
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">Skills</h2>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Title (\\n for new line)</label>
        <textarea
          value={data.title}
          onChange={(e) => onChange({ ...data, title: e.target.value })}
          rows={3}
          className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
        />
      </div>
      <ImageField
        label="Section image"
        value={data.image}
        onChange={(image) => onChange({ ...data, image })}
      />
      {data.stats.map((stat, i) => (
        <div key={i} className="flex gap-4">
          <input
            type="text"
            placeholder="Value"
            value={stat.value}
            onChange={(e) => {
              const stats = [...data.stats];
              stats[i] = { ...stats[i], value: e.target.value };
              onChange({ ...data, stats });
            }}
            className="w-24 bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
          />
          <input
            type="text"
            placeholder="Label"
            value={stat.label.replace(/\n/g, " ")}
            onChange={(e) => {
              const stats = [...data.stats];
              stats[i] = { ...stats[i], label: e.target.value };
              onChange({ ...data, stats });
            }}
            className="flex-1 bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
          />
        </div>
      ))}
      {data.items.map((item, i) => (
        <div key={i} className="border border-dark-border rounded-lg p-4 space-y-2">
          <input
            type="text"
            placeholder="Title"
            value={item.title}
            onChange={(e) => {
              const items = [...data.items];
              items[i] = { ...items[i], title: e.target.value };
              onChange({ ...data, items });
            }}
            className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
          />
          <textarea
            placeholder="Description"
            value={item.description}
            onChange={(e) => {
              const items = [...data.items];
              items[i] = { ...items[i], description: e.target.value };
              onChange({ ...data, items });
            }}
            rows={2}
            className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
          />
        </div>
      ))}
    </div>
  );
}
