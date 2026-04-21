"use client";

import { useState } from "react";
import type { SiteContent } from "@/lib/types";

export function FaqSection({ content }: { content: SiteContent["faqs"] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="max-w-[85%] mx-auto px-6 md:px-10 py-24 bg-dark-card rounded-[2.5rem] border border-dark-border">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-white">{content.title}</h2>
        <p className="text-gray-400">{content.subtitle}</p>
      </div>
      <div className="max-w-4xl mx-auto space-y-4">
        {content.items.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="bg-dark border border-dark-border rounded-2xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-dark-card transition-colors group"
              >
                <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: isOpen ? 500 : 0,
                }}
              >
                <div className="px-6 pb-5">
                  <div className="space-y-2 text-sm text-gray-400 whitespace-pre-line">
                    {faq.answer.split("\n").map((line, j) => (
                      <p key={j} className="flex items-start gap-2">
                        {/^\d\./.test(line) ? (
                          <>
                            <span className="text-gold">{line.slice(0, 2)}</span>
                            <span>{line.slice(2)}</span>
                          </>
                        ) : (
                          line
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center mt-12">
        <a
          href="#contact"
          className="inline-block bg-gold hover:bg-gold-dark text-dark px-8 py-3 rounded-full text-sm font-semibold transition-colors"
        >
          {content.cta}
        </a>
      </div>
    </section>
  );
}
