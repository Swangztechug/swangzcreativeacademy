import Image from "next/image";
import Link from "next/link";
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
          <section className="reveal rounded-3xl bg-slate-50 p-8 sm:p-12" data-reveal>
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-zinc-500">Featured</p>
            <blockquote className="mx-auto mt-8 max-w-4xl text-center">
              <p className="text-2xl font-bold leading-snug tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
                The structure made all the difference. I stopped “watching tutorials” and started building—week after week.
                <span className="mt-4 block text-xl font-semibold text-zinc-400 sm:text-2xl lg:text-3xl">
                  I landed interviews within a month of finishing.
                </span>
              </p>
            </blockquote>
            <div className="mt-12 flex items-center justify-center gap-4 sm:gap-6">
              <div className="h-14 w-14 overflow-hidden rounded-2xl grayscale opacity-70 sm:h-16 sm:w-16">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                  alt=""
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center">
                <div className="h-20 w-20 overflow-hidden rounded-2xl shadow-lg ring-4 ring-white sm:h-24 sm:w-24">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
                    alt=""
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-4 text-sm font-semibold text-zinc-900">Sarah Mitchell</p>
                <p className="text-xs text-zinc-500">Product Designer, Berlin</p>
              </div>
              <div className="h-14 w-14 overflow-hidden rounded-2xl grayscale opacity-70 sm:h-16 sm:w-16">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
                  alt=""
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </section>

          <section className="mt-12 reveal sm:mt-14" data-reveal>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { k: "Momentum", v: "+4", d: "Projects shipped on average per course." },
                { k: "Clarity", v: "Weekly", d: "Critique sessions + next-step guidance." },
                { k: "Confidence", v: "Stronger", d: "Case studies that tell the story behind the work." },
              ].map((x) => (
                <div key={x.k} className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">{x.k}</p>
                  <p className="mt-3 text-3xl font-bold tracking-tight text-zinc-900">{x.v}</p>
                  <p className="mt-2 text-sm text-zinc-600">{x.d}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 reveal sm:mt-20" data-reveal>
            <div className="rounded-3xl bg-zinc-900 p-8 text-white sm:p-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/70">Next step</p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">See if a course fits your goals</h3>
              <p className="mt-3 max-w-xl leading-relaxed text-white/80">
                Browse tracks, compare outcomes, and apply when you’re ready—we’ll help you choose.
              </p>
              <Link
                href="/courses"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-100"
              >
                Browse courses
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
