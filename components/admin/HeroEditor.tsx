"use client";

import type { SiteContent } from "@/lib/types";
import { ImageField } from "./ImageField";

export function HeroEditor({
  data,
  onChange,
}: {
  data: SiteContent["hero"];
  onChange: (data: SiteContent["hero"]) => void;
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">Hero</h2>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Headline (use \\n for new line)</label>
        <textarea
          value={data.headline}
          onChange={(e) => onChange({ ...data, headline: e.target.value })}
          rows={3}
          className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Subheadline</label>
        <textarea
          value={data.subheadline}
          onChange={(e) => onChange({ ...data, subheadline: e.target.value })}
          rows={2}
          className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
        />
      </div>
      {data.cards.map((card, i) => (
        <div key={i} className="border border-dark-border rounded-xl p-4 space-y-4">
          <h3 className="text-gold font-medium">Card {i + 1}</h3>
          <ImageField
            label="Image"
            value={card.image}
            onChange={(image) => {
              const cards = [...data.cards];
              cards[i] = { ...cards[i], image };
              onChange({ ...data, cards });
            }}
          />
          <div>
            <label className="block text-sm text-gray-400 mb-1">Title (\\n for new line)</label>
            <input
              type="text"
              value={card.title.replace(/\n/g, "\\n")}
              onChange={(e) => {
                const cards = [...data.cards];
                cards[i] = {
                  ...cards[i],
                  title: e.target.value.replace(/\\n/g, "\n"),
                };
                onChange({ ...data, cards });
              }}
              className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Label (vertical text)</label>
            <input
              type="text"
              value={card.label}
              onChange={(e) => {
                const cards = [...data.cards];
                cards[i] = { ...cards[i], label: e.target.value };
                onChange({ ...data, cards });
              }}
              className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Lessons count</label>
            <input
              type="text"
              value={card.lessons}
              onChange={(e) => {
                const cards = [...data.cards];
                cards[i] = { ...cards[i], lessons: e.target.value };
                onChange({ ...data, cards });
              }}
              className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
