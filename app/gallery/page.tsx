import Image from "next/image";
import { InnerHero } from "@/components/InnerHero";

const heroBg =
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2400&q=80";

export const metadata = {
  title: "Gallery",
  description:
    "Scenes from workshops, critiques, and celebrations at Swangz Creative Academy—see how students learn and ship together.",
};

const tiles = [
  {
    href: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=80",
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    label: "Workshop",
  },
  {
    href: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80",
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    label: "Collaboration",
  },
  {
    href: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1800&q=80",
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80",
    label: "Deep work",
  },
  {
    href: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    label: "Feedback",
  },
  {
    href: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80",
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    label: "Planning",
  },
];

export default function GalleryPage() {
  return (
    <>
      <InnerHero backgroundImage={heroBg}>
        <div className="mt-12 max-w-2xl">
          <p className="float-in text-xs font-semibold uppercase tracking-widest text-white/70" style={{ animationDelay: "60ms" }}>
            Gallery
          </p>
          <h1
            className="float-in mt-3 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ animationDelay: "120ms" }}
          >
            Moments from the studio
          </h1>
          <p className="float-in mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg" style={{ animationDelay: "180ms" }}>
            A quick look at what learning together can feel like—focus, community, and craft.
          </p>
        </div>
      </InnerHero>

      <main className="bg-white py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <section className="reveal" data-reveal>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {tiles.map((t) => (
                <a
                  key={t.label}
                  href={t.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block aspect-[16/10] overflow-hidden rounded-2xl"
                >
                  <Image
                    src={t.src}
                    alt={t.label}
                    fill
                    className="object-cover transition group-hover:brightness-95"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-zinc-900 shadow-sm backdrop-blur-sm">
                    {t.label}
                  </span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
