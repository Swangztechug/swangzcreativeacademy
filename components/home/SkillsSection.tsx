import Image from "next/image";
import type { SiteContent } from "@/lib/types";

export function SkillsSection({ content }: { content: SiteContent["skills"] }) {
  const lines = content.title.split("\n");
  return (
    <section className="max-w-[85%] mx-auto px-6 md:px-10 py-24 md:py-32 flex flex-col lg:flex-row gap-20 items-center">
      <div className="lg:w-1/2">
        <h2 className="text-4xl font-bold mb-12 leading-tight text-white">
          {lines.map((line, i) => (
            <span key={i}>
              {line}
              {i < lines.length - 1 && <br />}
            </span>
          ))}
        </h2>
        <div className="space-y-10">
          {content.items.map((item, i) => (
            <div key={i} className="flex items-start gap-6">
              <div className="w-6 h-6 mt-1 text-gold flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="w-full h-full"
                >
                  <path
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-base text-white">{item.title}</h4>
                <p className="text-sm text-gray-400 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-1/2 relative w-full">
        <div className="absolute top-0 left-0 right-0 bg-gold h-20 rounded-t-[2.5rem] z-20 flex items-center justify-around px-10 -translate-y-1/2">
          {content.stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3 text-dark">
              <span className="text-3xl font-extrabold">{stat.value}</span>
              <span className="text-[9px] font-bold uppercase tracking-widest leading-none whitespace-pre-line">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10">
          <Image
            src={content.image}
            alt="Skills"
            width={1000}
            height={500}
            className="w-full h-[400px] md:h-[500px] object-cover"
            unoptimized={content.image.startsWith("/") ? false : undefined}
          />
        </div>
      </div>
    </section>
  );
}
