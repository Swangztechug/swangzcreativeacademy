import Image from "next/image";
import { InnerHero } from "@/components/InnerHero";

const heroBg =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80";

export const metadata = { title: "Testimonials" };

export default function TestimonialsPage() {
  return (
    <>
      <InnerHero backgroundImage={heroBg}>
        <div className="mt-12 max-w-2xl">
          <p className="float-in text-xs font-semibold uppercase tracking-widest text-white/70" style={{ animationDelay: "60ms" }}>
            Testimonials
          </p>
          <h1
            className="float-in mt-3 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ animationDelay: "120ms" }}
          >
            Creatives who shipped, refined, and leveled up
          </h1>
          <p className="float-in mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg" style={{ animationDelay: "180ms" }}>
            Real results from projects, critique, and consistent practice.
          </p>
        </div>
      </InnerHero>

      <main className="bg-white py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <section className="reveal rounded-3xl border border-zinc-200 bg-slate-50 p-8 sm:p-12" data-reveal>
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-zinc-500">Featured story</p>
            <blockquote className="mx-auto mt-8 max-w-4xl text-center">
              <p className="text-2xl font-bold leading-snug tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
                The structure made all the difference. I stopped watching tutorials and started shipping real work each week.
              </p>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
                By the end, I had a portfolio case study with clear process and outcomes, and started getting interviews within a month.
              </p>
            </blockquote>
            <div className="mt-10 flex items-center justify-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-2xl shadow-md ring-4 ring-white sm:h-20 sm:w-20">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
                  alt="Sarah Mitchell portrait"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-900">Sarah Mitchell</p>
                <p className="text-xs text-zinc-500">Product Designer, Berlin</p>
              </div>
            </div>
          </section>

          <section className="mt-12 reveal sm:mt-14" data-reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "David A.",
                  role: "Brand Designer",
                  quote: "The weekly critique made my work sharper fast. I could see what to improve every single week.",
                },
                {
                  name: "Lina K.",
                  role: "Motion Designer",
                  quote: "I finally finished projects instead of collecting unfinished ideas. The pace and accountability worked.",
                },
                {
                  name: "Joel M.",
                  role: "Visual Storyteller",
                  quote: "The mentors pushed my thinking and helped me present my process clearly to clients and hiring teams.",
                },
              ].map((t) => (
                <article key={t.name} className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
                  <p className="text-3xl leading-none text-zinc-300">&ldquo;</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-700">{t.quote}</p>
                  <p className="mt-6 text-sm font-semibold text-zinc-900">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
