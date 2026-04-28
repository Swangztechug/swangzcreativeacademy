import Image from "next/image";
import Link from "next/link";
import { InnerHero } from "@/components/InnerHero";

const heroBg =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2400&q=80";

export const metadata = { title: "Courses" };

export default function CoursesPage() {
  return (
    <>
      <InnerHero backgroundImage={heroBg}>
        <div className="mt-12 max-w-2xl">
          <p className="float-in text-xs font-semibold uppercase tracking-widest text-white/70" style={{ animationDelay: "60ms" }}>
            Courses
          </p>
          <h1
            className="float-in mt-3 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ animationDelay: "120ms" }}
          >
            Creative courses designed for momentum
          </h1>
          <p className="float-in mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg" style={{ animationDelay: "180ms" }}>
            Pick a track, build real projects, and get feedback that helps you level up faster.
          </p>
        </div>
      </InnerHero>

      <main className="bg-white py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <section className="reveal" data-reveal>
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 lg:pt-2">Catalog</p>
              <div className="max-w-2xl lg:ml-auto lg:text-right">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
                  Find your next creative skill
                </h2>
                <p className="mt-4 leading-relaxed text-zinc-600 lg:ml-auto lg:max-w-lg">
                  Short sprints or deep tracks—each course includes exercises, projects, and structured milestones.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3 md:items-start">
              <article className="group flex flex-col">
                <Link href="/courses/brand" className="block">
                  <div className="aspect-[16/10] overflow-hidden rounded-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
                      alt=""
                      width={800}
                      height={500}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Link>
                <Link
                  href="/courses/brand"
                  className="mt-5 text-lg font-bold text-zinc-900 underline-offset-4 hover:underline"
                >
                  Brand &amp; Identity Design
                </Link>
                <p className="mt-2 text-sm text-zinc-600">Identity, typography, and systems. Build a cohesive brand kit.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-zinc-900">$249</span>
                  <Link
                    href="/apply?course=brand-identity"
                    className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800"
                  >
                    Apply
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>

              <article className="group flex flex-col">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
                    alt=""
                    width={900}
                    height={563}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900">Motion &amp; Animation</h3>
                    <p className="mt-1 text-zinc-600">
                      From <span className="font-semibold text-zinc-900">$189</span> · 8 weeks
                    </p>
                  </div>
                  <Link
                    href="/courses/motion"
                    className="inline-flex shrink-0 items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800"
                  >
                    View details
                  </Link>
                </div>
              </article>

              <article className="group flex flex-col">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                    alt=""
                    width={800}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-5 text-lg font-bold text-zinc-900">Photo &amp; Visual Storytelling</h3>
                <p className="mt-2 text-sm text-zinc-600">Shoot, edit, and sequence a story-driven photo series.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-zinc-900">$149</span>
                  <Link
                    href="/courses/photo#syllabus"
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 shadow-sm transition hover:border-zinc-300"
                  >
                    View details
                  </Link>
                </div>
              </article>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
