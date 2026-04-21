import Image from "next/image";
import type { SiteContent } from "@/lib/types";

export function HeroSection({ content }: { content: SiteContent["hero"] }) {
  const lines = content.headline.split("\n");
  return (
    <header className="max-w-[85%] mx-auto px-6 md:px-10 py-16 flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/3">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-10 text-white">
          {lines.map((line, i) => (
            <span key={i}>
              {line}
              {i < lines.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="text-lg text-gray-400 mb-8">{content.subheadline}</p>
      </div>
      <div className="lg:w-2/3 flex h-[400px] md:h-[500px] gap-4 w-full">
        {content.cards.map((card, i) => (
          <div
            key={i}
            className={`group relative flex-1 ${i === 0 ? "flex-[3] hover:flex-[4]" : "hover:flex-[4]"} transition-all duration-500 ease-in-out cursor-pointer overflow-hidden rounded-[2.5rem]`}
          >
            <Image
              src={card.image}
              alt={card.label}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              unoptimized={card.image.startsWith("/") ? false : undefined}
            />
            <div
              className={`absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent text-white flex justify-between items-end transition-opacity duration-500 ${i === 0 ? "opacity-100" : "group-hover:opacity-100 opacity-0"}`}
            >
              <div>
                <p className="text-xl font-bold leading-tight whitespace-pre-line">
                  {card.title}
                </p>
              </div>
              <div className="text-right">
                <span className="text-4xl font-bold">{card.lessons}</span>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">
                  Lessons
                </p>
              </div>
            </div>
            {i > 0 && (
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity">
                <span className="vertical-text text-white font-bold tracking-widest uppercase opacity-70">
                  {card.label}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </header>
  );
}
