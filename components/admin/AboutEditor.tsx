"use client";

import type { SiteContent } from "@/lib/types";

export function AboutEditor({
  data,
  onChange,
}: {
  data: SiteContent["about"];
  onChange: (data: SiteContent["about"]) => void;
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">About</h2>
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
      <div>
        <label className="block text-sm text-gray-400 mb-1">Intro</label>
        <textarea
          value={data.intro}
          onChange={(e) => onChange({ ...data, intro: e.target.value })}
          rows={3}
          className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Mission</label>
        <textarea
          value={data.mission}
          onChange={(e) => onChange({ ...data, mission: e.target.value })}
          rows={2}
          className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Stats section heading</label>
        <input
          type="text"
          value={data.statsHeading ?? ""}
          onChange={(e) => onChange({ ...data, statsHeading: e.target.value })}
          placeholder="e.g. Why Choose SCA?"
          className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-2">Stats (label / value)</label>
        {data.stats.map((stat, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Label"
              value={stat.label}
              onChange={(e) => {
                const stats = [...data.stats];
                stats[i] = { ...stats[i], label: e.target.value };
                onChange({ ...data, stats });
              }}
              className="flex-1 bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
            />
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
          </div>
        ))}
      </div>
      {data.highlights.map((h, i) => (
        <div key={i} className="border border-dark-border rounded-lg p-4 space-y-2">
          <input
            type="text"
            placeholder="Title"
            value={h.title}
            onChange={(e) => {
              const highlights = [...data.highlights];
              highlights[i] = { ...highlights[i], title: e.target.value };
              onChange({ ...data, highlights });
            }}
            className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
          />
          <input
            type="text"
            placeholder="Description"
            value={h.description}
            onChange={(e) => {
              const highlights = [...data.highlights];
              highlights[i] = { ...highlights[i], description: e.target.value };
              onChange({ ...data, highlights });
            }}
            className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
          />
        </div>
      ))}
      {data.values.map((v, i) => (
        <div key={i} className="border border-dark-border rounded-lg p-4 space-y-2">
          <input
            type="text"
            placeholder="Value title"
            value={v.title}
            onChange={(e) => {
              const values = [...data.values];
              values[i] = { ...values[i], title: e.target.value };
              onChange({ ...data, values });
            }}
            className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
          />
          <input
            type="text"
            placeholder="Description"
            value={v.description}
            onChange={(e) => {
              const values = [...data.values];
              values[i] = { ...values[i], description: e.target.value };
              onChange({ ...data, values });
            }}
            className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
          />
        </div>
      ))}
    </div>
  );
}
