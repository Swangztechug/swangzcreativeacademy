import Image from "next/image";
import type { SiteContent } from "@/lib/types";

export function TestimonialsSection({
  content,
}: {
  content: SiteContent["testimonials"];
}) {
  return (
    <section className="max-w-[85%] mx-auto px-6 md:px-10 py-24 text-center">
      <h2 className="text-4xl font-bold mb-20 text-white">{content.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {content.items.map((item, i) => (
          <div
            key={i}
            className="bg-dark-card border border-dark-border p-8 rounded-[2rem] flex flex-col justify-between h-full hover:border-gold hover:shadow-xl hover:shadow-gold/20 transition-all"
          >
            <p className="text-sm text-gray-300 leading-relaxed italic mb-8">
              &ldquo;{item.quote}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.author}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
                unoptimized={item.image.startsWith("/") ? false : undefined}
              />
              <div>
                <h5 className="text-xs font-bold text-white">{item.author}</h5>
                <p className="text-[10px] text-gray-400 font-bold uppercase">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12 gap-4">
        <button
          type="button"
          className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center text-gray-400 hover:bg-gold hover:border-gold hover:text-dark transition-all"
          aria-label="Previous"
        >
          ←
        </button>
        <button
          type="button"
          className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center text-gray-400 hover:bg-gold hover:border-gold hover:text-dark transition-all"
          aria-label="Next"
        >
          →
        </button>
      </div>
    </section>
  );
}
