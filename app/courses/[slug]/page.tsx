import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InnerHero } from "@/components/InnerHero";
import { COURSES, COURSE_SLUGS, type CourseSlug } from "@/lib/courses";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return COURSE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const c = COURSES[slug as CourseSlug];
  if (!c) return { title: "Course" };
  return { title: c.title };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = COURSES[slug as CourseSlug];
  if (!course) notFound();

  return (
    <>
      <InnerHero backgroundImage={course.heroImage}>
        <div className="mt-10 max-w-3xl">
          <p
            className="float-in text-xs font-semibold uppercase tracking-widest text-white/70"
            style={{ animationDelay: "60ms" }}
          >
            Course · {course.weeks} · Project-based
          </p>
          <h1
            className="float-in mt-3 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ animationDelay: "120ms" }}
          >
            {course.title}
          </h1>
          <p
            className="float-in mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
            style={{ animationDelay: "180ms" }}
          >
            {course.tagline}
          </p>
          <div className="float-in mt-8 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ animationDelay: "240ms" }}>
            <Link
              href={`/apply?course=${encodeURIComponent(course.applyParam)}`}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-100"
            >
              Apply &amp; pay
            </Link>
            <Link
              href="#syllabus"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15"
            >
              View syllabus
            </Link>
            <span className="text-sm text-white/80">
              From <span className="font-semibold text-white">{course.price}</span> · Limited seats
            </span>
          </div>
        </div>
      </InnerHero>

      <main className="bg-white py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <section className="grid gap-6 md:grid-cols-3 reveal" data-reveal>
            {[
              { k: "Format", t: "Studio critique", d: "Weekly critique + guided work blocks you can repeat." },
              { k: "Outcome", t: "Portfolio-ready work", d: "Finish with a project you can present with clarity." },
              { k: "Level", t: "Beginner → intermediate", d: "Foundations first, then deeper projects." },
            ].map((c) => (
              <div key={c.k} className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">{c.k}</p>
                <p className="mt-3 text-lg font-bold text-zinc-900">{c.t}</p>
                <p className="mt-2 text-sm text-zinc-600">{c.d}</p>
              </div>
            ))}
          </section>

          <section id="syllabus" className="mt-16 grid gap-10 reveal sm:mt-20 lg:grid-cols-12" data-reveal>
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Syllabus</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">What you’ll build</h2>
              <p className="mt-4 leading-relaxed text-zinc-600">
                Weekly milestones, instructor feedback, and a final presentation.
              </p>
              <div className="mt-10 space-y-4">
                <details className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm" open>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="font-semibold text-zinc-900">Early weeks · Foundations</span>
                    <span className="text-zinc-500 transition group-open:rotate-180">▾</span>
                  </summary>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                    <li>Constraints, references, and first drafts.</li>
                    <li>Establish rhythm and weekly shipping.</li>
                  </ul>
                </details>
                <details className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="font-semibold text-zinc-900">Middle weeks · Depth</span>
                    <span className="text-zinc-500 transition group-open:rotate-180">▾</span>
                  </summary>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                    <li>Iterate from critique; tighten craft.</li>
                    <li>Systems, consistency, and polish.</li>
                  </ul>
                </details>
                <details className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="font-semibold text-zinc-900">Final weeks · Ship</span>
                    <span className="text-zinc-500 transition group-open:rotate-180">▾</span>
                  </summary>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                    <li>Presentation-ready deliverables.</li>
                    <li>Case study and next steps.</li>
                  </ul>
                </details>
              </div>
            </div>

            <aside className="lg:col-span-5 lg:pl-2">
              <div className="rounded-3xl bg-slate-50 p-6 sm:p-8">
                <h3 className="text-lg font-bold text-zinc-900">Instructor</h3>
                <p className="mt-2 text-sm text-zinc-600">Working creatives with a critique-first approach.</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-14 w-14 overflow-hidden rounded-2xl ring-1 ring-black/5">
                    <Image
                      src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80"
                      alt=""
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">Studio instructor</p>
                    <p className="text-xs text-zinc-500">Lead mentor</p>
                  </div>
                </div>
                <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-zinc-900">Ready to apply?</p>
                  <p className="mt-2 text-sm text-zinc-600">Takes ~3 minutes. We’ll reply within 1–2 business days.</p>
                  <Link
                    href={`/apply?course=${encodeURIComponent(course.applyParam)}`}
                    className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
                  >
                    Apply &amp; pay
                  </Link>
                  <Link
                    href="/contact"
                    className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:border-zinc-300"
                  >
                    Ask a question
                  </Link>
                </div>
              </div>
            </aside>
          </section>
        </div>
      </main>
    </>
  );
}
