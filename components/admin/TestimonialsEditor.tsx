"use client";

import type { SiteContent } from "@/lib/types";
import { ImageField } from "./ImageField";

export function TestimonialsEditor({
  data,
  onChange,
}: {
  data: SiteContent["testimonials"];
  onChange: (data: SiteContent["testimonials"]) => void;
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">Testimonials</h2>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Section title</label>
        <input
          type="text"
          value={data.title}
          onChange={(e) => onChange({ ...data, title: e.target.value })}
          className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
        />
      </div>
      {data.items.map((item, i) => (
        <div key={i} className="border border-dark-border rounded-xl p-4 space-y-4">
          <h3 className="text-gold font-medium">Testimonial {i + 1}</h3>
          <ImageField
            label="Avatar"
            value={item.image}
            onChange={(image) => {
              const items = [...data.items];
              items[i] = { ...items[i], image };
              onChange({ ...data, items });
            }}
          />
          <textarea
            placeholder="Quote"
            value={item.quote}
            onChange={(e) => {
              const items = [...data.items];
              items[i] = { ...items[i], quote: e.target.value };
              onChange({ ...data, items });
            }}
            rows={3}
            className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
          />
          <input
            type="text"
            placeholder="Author name"
            value={item.author}
            onChange={(e) => {
              const items = [...data.items];
              items[i] = { ...items[i], author: e.target.value };
              onChange({ ...data, items });
            }}
            className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
          />
          <input
            type="text"
            placeholder="Role / title"
            value={item.role}
            onChange={(e) => {
              const items = [...data.items];
              items[i] = { ...items[i], role: e.target.value };
              onChange({ ...data, items });
            }}
            className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
          />
        </div>
      ))}
    </div>
  );
}
