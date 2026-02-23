"use client";

import type { SiteContent } from "@/lib/types";

export function FooterEditor({
  data,
  onChange,
}: {
  data: SiteContent["footer"];
  onChange: (data: SiteContent["footer"]) => void;
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">Footer</h2>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Tagline</label>
        <textarea
          value={data.tagline}
          onChange={(e) => onChange({ ...data, tagline: e.target.value })}
          rows={2}
          className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Newsletter title</label>
        <input
          type="text"
          value={data.newsletterTitle}
          onChange={(e) => onChange({ ...data, newsletterTitle: e.target.value })}
          className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Newsletter subtext</label>
        <input
          type="text"
          value={data.newsletterSubtext}
          onChange={(e) => onChange({ ...data, newsletterSubtext: e.target.value })}
          className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
        />
      </div>
      <div className="border border-dark-border rounded-xl p-4 space-y-4">
        <h3 className="text-gold font-medium">Contact</h3>
        <input
          type="text"
          placeholder="Sales email"
          value={data.contact.salesEmail}
          onChange={(e) =>
            onChange({
              ...data,
              contact: { ...data.contact, salesEmail: e.target.value },
            })
          }
          className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
        />
        <input
          type="text"
          placeholder="Production email"
          value={data.contact.productionEmail}
          onChange={(e) =>
            onChange({
              ...data,
              contact: { ...data.contact, productionEmail: e.target.value },
            })
          }
          className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
        />
        <input
          type="text"
          placeholder="Sales phone"
          value={data.contact.salesPhone}
          onChange={(e) =>
            onChange({
              ...data,
              contact: { ...data.contact, salesPhone: e.target.value },
            })
          }
          className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
        />
        <input
          type="text"
          placeholder="Production phone"
          value={data.contact.productionPhone}
          onChange={(e) =>
            onChange({
              ...data,
              contact: { ...data.contact, productionPhone: e.target.value },
            })
          }
          className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
        />
        <div>
          <label className="block text-sm text-gray-400 mb-1">Address (one line per row)</label>
          <textarea
            value={data.contact.address.join("\n")}
            onChange={(e) =>
              onChange({
                ...data,
                contact: {
                  ...data.contact,
                  address: e.target.value.split("\n").map((s) => s.trim()).filter(Boolean),
                },
              })
            }
            rows={3}
            className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Copyright</label>
        <input
          type="text"
          value={data.copyright}
          onChange={(e) => onChange({ ...data, copyright: e.target.value })}
          className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
        />
      </div>
    </div>
  );
}
