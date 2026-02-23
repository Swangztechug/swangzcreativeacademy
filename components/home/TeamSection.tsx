import Image from "next/image";
import type { SiteContent } from "@/lib/types";

export function TeamSection({ content }: { content: SiteContent["team"] }) {
  return (
    <section id="tutors" className="max-w-[85%] mx-auto px-6 md:px-10 py-24">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 text-gold font-semibold text-xs tracking-widest uppercase mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {content.badge}
        </div>
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
          {content.title}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">{content.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {content.members.map((member, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-[2rem]"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={800}
              height={500}
              className="w-full h-[400px] md:h-[500px] object-cover grayscale-[20%]"
              unoptimized={member.image.startsWith("/") ? false : undefined}
            />
            <div className="absolute bottom-0 left-0 bg-gold py-6 px-8 w-[75%] shadow-xl">
              <h3 className="text-dark text-xl font-bold">{member.name}</h3>
              <p className="text-dark/80 text-sm font-medium">{member.role}</p>
            </div>
            <button
              type="button"
              className="absolute bottom-6 right-6 bg-gold p-3 rounded-full text-dark hover:bg-gold-dark transition-colors shadow-lg"
              aria-label="Share"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
