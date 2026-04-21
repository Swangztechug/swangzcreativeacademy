"use client";

import type { SiteContent } from "@/lib/types";
import { ImageField } from "./ImageField";

export function TeamEditor({
  data,
  onChange,
}: {
  data: SiteContent["team"];
  onChange: (data: SiteContent["team"]) => void;
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">Team</h2>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Badge</label>
        <input
          type="text"
          value={data.badge}
          onChange={(e) => onChange({ ...data, badge: e.target.value })}
          className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
        />
      </div>
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
      {data.members.map((member, i) => (
        <div key={i} className="border border-dark-border rounded-xl p-4 space-y-4">
          <h3 className="text-gold font-medium">Member {i + 1}</h3>
          <ImageField
            label="Photo"
            value={member.image}
            onChange={(image) => {
              const members = [...data.members];
              members[i] = { ...members[i], image };
              onChange({ ...data, members });
            }}
          />
          <input
            type="text"
            placeholder="Name"
            value={member.name}
            onChange={(e) => {
              const members = [...data.members];
              members[i] = { ...members[i], name: e.target.value };
              onChange({ ...data, members });
            }}
            className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
          />
          <input
            type="text"
            placeholder="Role"
            value={member.role}
            onChange={(e) => {
              const members = [...data.members];
              members[i] = { ...members[i], role: e.target.value };
              onChange({ ...data, members });
            }}
            className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
          />
        </div>
      ))}
    </div>
  );
}
