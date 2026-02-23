"use client";

import type { SiteContent } from "@/lib/types";

export function FaqsEditor({
  data,
  onChange,
}: {
  data: SiteContent["faqs"];
  onChange: (data: SiteContent["faqs"]) => void;
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">FAQs</h2>
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
        <label className="block text-sm text-gray-400 mb-1">CTA button text</label>
        <input
          type="text"
          value={data.cta}
          onChange={(e) => onChange({ ...data, cta: e.target.value })}
          className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
        />
      </div>
      {data.items.map((item, i) => (
        <div key={i} className="border border-dark-border rounded-xl p-4 space-y-2">
          <input
            type="text"
            placeholder="Question"
            value={item.question}
            onChange={(e) => {
              const items = [...data.items];
              items[i] = { ...items[i], question: e.target.value };
              onChange({ ...data, items });
            }}
            className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
          />
          <textarea
            placeholder="Answer (use new lines for list)"
            value={item.answer}
            onChange={(e) => {
              const items = [...data.items];
              items[i] = { ...items[i], answer: e.target.value };
              onChange({ ...data, items });
            }}
            rows={4}
            className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
          />
        </div>
      ))}
    </div>
  );
}
