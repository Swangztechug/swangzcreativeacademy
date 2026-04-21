import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { InnerHero } from "@/components/InnerHero";

const heroBg =
  "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=2400&q=80";

const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=Swangz+Creative+Academy+Uganda&output=embed";

const COMPANY_NAME = "Swangz Creative Academy";
const PHONE_DISPLAY = "+256 700 000 000";
const PHONE_TEL = "+256700000000";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <InnerHero backgroundImage={heroBg}>
        <div className="mt-12 max-w-2xl">
          <p className="float-in text-xs font-semibold uppercase tracking-widest text-white/70" style={{ animationDelay: "60ms" }}>
            Contact
          </p>
          <h1
            className="float-in mt-3 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ animationDelay: "120ms" }}
          >
            We’re here to help
          </h1>
          <p className="float-in mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg" style={{ animationDelay: "180ms" }}>
            Questions about courses, pricing, or schedules? Send a message and we’ll get back within 1–2 business days.
          </p>
        </div>
      </InnerHero>

      <main className="bg-white py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
            <section className="flex h-full min-h-0">
              <div
                className="reveal flex h-full w-full flex-col rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
                data-reveal
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Get in touch</p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                    Send us a message
                  </h2>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-600">
                    Tell us what you need—courses, schedules, or admissions—and we&apos;ll reply soon.
                  </p>
                </div>
                <ContactForm phonePlaceholder={PHONE_DISPLAY} />
              </div>
            </section>

            <aside className="flex h-full min-h-0 flex-col gap-8">
              <div
                className="reveal flex min-h-0 flex-1 flex-col justify-between gap-8 rounded-3xl bg-slate-50 p-6 sm:p-8"
                data-reveal
              >
                <div>
                  <h3 className="text-lg font-bold text-zinc-900">Contact details</h3>
                  <p className="mt-2 text-sm text-zinc-600">Prefer email or a quick call? Use the options below.</p>
                  <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                      <svg className="h-5 w-5 text-zinc-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">Company</p>
                      <p className="mt-1 text-sm text-zinc-600">{COMPANY_NAME}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                      <svg className="h-5 w-5 text-zinc-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">Phone</p>
                      <a
                        href={`tel:${PHONE_TEL}`}
                        className="mt-1 block text-sm text-zinc-600 hover:text-zinc-900"
                      >
                        {PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                      <svg className="h-5 w-5 text-zinc-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 10h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">Email</p>
                      <a
                        href="mailto:hello@swangacademy.com"
                        className="mt-1 block text-sm text-zinc-600 hover:text-zinc-900"
                      >
                        hello@swangacademy.com
                      </a>
                    </div>
                  </div>
                </div>
                </div>
                <Link
                  href="/courses"
                  className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
                >
                  View courses
                </Link>
              </div>

              <div
                className="reveal flex min-h-0 flex-1 flex-col rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
                data-reveal
              >
                <div className="relative min-h-[12rem] flex-1 overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-black/5 lg:min-h-0">
                  <iframe
                    title="Map — Swangz Creative Academy"
                    src={MAP_EMBED_SRC}
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
