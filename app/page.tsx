import Image from "next/image";
import Link from "next/link";
import { HeroCarousel } from "@/components/HeroCarousel";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      <section id="courses" className="reveal bg-white py-24 sm:py-32" data-reveal>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 lg:pt-2">Courses</p>
            <div className="max-w-2xl lg:ml-auto lg:text-right">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
                Courses built for creative momentum
              </h2>
              <p className="mt-4 leading-relaxed text-zinc-600 lg:ml-auto lg:max-w-lg">
                From foundations to advanced tracks—learn by making, get critique, and leave with work you’re proud to
                show.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3 md:items-start">
            <article className="flex flex-col">
              <Link href="/courses/brand" className="block">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
                    alt="Brand work on laptop"
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
              <p className="mt-2 text-sm text-zinc-600">Identity, typography, and systems—build a complete brand kit.</p>
            </article>

            <article className="flex flex-col">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
                  alt="Team learning together"
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

            <article className="flex flex-col">
              <Link href="/courses/photo" className="block">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                    alt="Photography edit session"
                    width={800}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Link>
              <Link
                href="/courses/photo"
                className="mt-5 text-lg font-bold text-zinc-900 underline-offset-4 hover:underline"
              >
                Photo &amp; Visual Storytelling
              </Link>
              <p className="mt-2 text-sm text-zinc-600">Light, composition, editing, and narrative in a cohesive series.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="blog" className="reveal bg-slate-50 py-24 sm:py-32" data-reveal>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Blog</p>
              <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
                Ideas, breakdowns, and behind-the-scenes from our instructors
              </h2>
            </div>
            <div className="max-w-md lg:text-right">
              <p className="leading-relaxed text-zinc-600">
                Short reads on craft, creative process, and the tools we actually use—no fluff, just signal.
              </p>
              <Link
                href="/blog"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 lg:ml-auto"
              >
                View all posts
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <Link
              href="/blog/daily-habit"
              className="group relative block aspect-[16/10] overflow-hidden rounded-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80"
                alt="Writing and learning"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-zinc-900 shadow-sm backdrop-blur-sm">
                Process
              </span>
              <span className="absolute bottom-4 left-4 right-4 text-left">
                <span className="block text-lg font-semibold text-white drop-shadow-md">How to build a daily creative habit</span>
                <span className="mt-1 block text-sm text-white/90 drop-shadow">6 min read</span>
              </span>
            </Link>
            <Link href="/blog/portfolio" className="group relative block aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80"
                alt="Planning on desk"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-zinc-900 shadow-sm backdrop-blur-sm">
                Portfolio
              </span>
              <span className="absolute bottom-4 left-4 right-4 text-left">
                <span className="block text-lg font-semibold text-white drop-shadow-md">Portfolios that feel like you</span>
                <span className="mt-1 block text-sm text-white/90 drop-shadow">8 min read</span>
              </span>
            </Link>
            <Link href="/blog/critique" className="group relative block aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
                alt="Online lecture"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-zinc-900 shadow-sm backdrop-blur-sm">
                Studio notes
              </span>
              <span className="absolute bottom-4 left-4 right-4 text-left">
                <span className="block text-lg font-semibold text-white drop-shadow-md">What critique culture changes</span>
                <span className="mt-1 block text-sm text-white/90 drop-shadow">5 min read</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section id="testimonials" className="reveal bg-white py-24 text-center sm:py-32" data-reveal>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Testimonials</p>
          <blockquote className="mx-auto mt-8 max-w-4xl">
            <p className="text-2xl font-bold leading-snug tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
              I&apos;ve taken classes before, but this felt like a studio. Clear milestones, real critique, and instructors
              who actually show up.
              <span className="mt-4 block text-xl font-semibold text-zinc-400 sm:text-2xl lg:text-3xl">
                I shipped work I’m genuinely proud of.
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
        </div>
      </section>

      <section className="reveal bg-slate-50 py-24 sm:py-32" data-reveal>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">FAQ</p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">Common questions</h3>
            <div className="mt-8 space-y-4">
              {[
                { q: "Do I need prior experience?", a: "No—each course includes warm-ups and foundations, then ramps into projects." },
                { q: "How much time should I plan weekly?", a: "Most students do 5–7 hours/week. You’ll get a weekly plan you can follow." },
                { q: "What do I submit in the application?", a: "Your goals, availability, and (optional) portfolio link. That’s it." },
              ].map((f) => (
                <details key={f.q} className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="font-semibold text-zinc-900">{f.q}</span>
                    <span className="text-zinc-500 transition group-open:rotate-180">▾</span>
                  </summary>
                  <p className="mt-4 text-sm text-zinc-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
