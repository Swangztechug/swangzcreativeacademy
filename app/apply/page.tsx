import Link from "next/link";
import { Suspense } from "react";
import { ApplyForm } from "@/components/ApplyForm";
import { ApplyHeading } from "@/components/ApplyHeading";
import { InnerHero } from "@/components/InnerHero";

const bg =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2400&q=80";

export const metadata = {
  title: "Apply",
};

export default function ApplyPage() {
  return (
    <>
      <InnerHero backgroundImage={bg}>
        <div className="mt-10 max-w-3xl">
          <p
            className="float-in text-xs font-semibold uppercase tracking-widest text-white/70"
            style={{ animationDelay: "60ms" }}
          >
            Application
          </p>
          <h1
            className="float-in mt-3 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ animationDelay: "120ms" }}
          >
            Apply to{" "}
            <Suspense fallback={<span>a course</span>}>
              <ApplyHeading />
            </Suspense>
          </h1>
          <p
            className="float-in mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
            style={{ animationDelay: "180ms" }}
          >
            Tell us what you want to make, your current level, and your availability. We’ll reply within 1–2 business
            days.
          </p>
        </div>
      </InnerHero>

      <main className="bg-white py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <section className="reveal lg:col-span-7" data-reveal>
              <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">Your details</h2>
                <p className="mt-2 text-zinc-600">We’ll use this to contact you and tailor recommendations.</p>
                <Suspense fallback={<p className="mt-8 text-sm text-zinc-500">Loading form…</p>}>
                  <ApplyForm />
                </Suspense>
              </div>
            </section>

            <aside className="reveal lg:col-span-5 lg:pl-2" data-reveal>
              <div className="rounded-3xl bg-slate-50 p-6 sm:p-8">
                <h3 className="text-lg font-bold text-zinc-900">What happens next</h3>
                <ol className="mt-4 list-inside list-decimal space-y-3 text-sm text-zinc-600">
                  <li>We review your goals and availability.</li>
                  <li>We confirm your course and payment reference.</li>
                  <li>You get receipt + schedule options.</li>
                </ol>

                <div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-zinc-900">Not sure which course?</p>
                  <p className="mt-2 text-sm text-zinc-600">Apply anyway—we’ll place you in the best fit.</p>
                  <Link
                    href="/courses"
                    className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:border-zinc-300"
                  >
                    View courses
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
