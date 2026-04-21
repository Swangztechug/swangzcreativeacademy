import Image from "next/image";
import Link from "next/link";
import { InnerHero } from "@/components/InnerHero";

const heroBg =
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2400&q=80";

export const metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <>
      <InnerHero backgroundImage={heroBg}>
        <div className="mt-12 max-w-2xl">
          <p className="float-in text-xs font-semibold uppercase tracking-widest text-white/70" style={{ animationDelay: "60ms" }}>
            Blog
          </p>
          <h1
            className="float-in mt-3 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ animationDelay: "120ms" }}
          >
            Guides, stories, and practical lessons
          </h1>
          <p className="float-in mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg" style={{ animationDelay: "180ms" }}>
            Quick reads on craft, creative process, and building a portfolio that feels like you.
          </p>
        </div>
      </InnerHero>

      <main className="bg-white py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <section className="reveal" data-reveal>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Latest</p>
                <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
                  What we’re thinking this week
                </h2>
              </div>
              <div className="max-w-md lg:text-right">
                <p className="leading-relaxed text-zinc-600">Short, actionable posts—made to be applied in your next study session.</p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 lg:ml-auto"
                >
                  Join a studio
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {[
                {
                  href: "/blog/daily-habit",
                  img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80",
                  tag: "Study tips",
                  title: "How to build a daily creative habit",
                  read: "6 min read",
                },
                {
                  href: "/blog/portfolio",
                  img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
                  tag: "Career",
                  title: "Portfolios that feel like you",
                  read: "8 min read",
                },
                {
                  href: "/blog/critique",
                  img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
                  tag: "Studio notes",
                  title: "What critique culture changes",
                  read: "5 min read",
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group relative block aspect-[16/10] overflow-hidden rounded-2xl"
                >
                  <Image src={post.img} alt="" fill className="object-cover transition group-hover:brightness-95" sizes="33vw" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-zinc-900 shadow-sm backdrop-blur-sm">
                    {post.tag}
                  </span>
                  <span className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="block text-lg font-semibold text-white drop-shadow-md">{post.title}</span>
                    <span className="mt-1 block text-sm text-white/90 drop-shadow">{post.read}</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-16 reveal sm:mt-20" data-reveal>
            <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
              <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-10 lg:col-span-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Featured</p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                  A simple weekly practice that compounds
                </h3>
                <p className="mt-3 leading-relaxed text-zinc-600">
                  The fastest growth comes from tight feedback loops. Here’s a 45‑minute weekly routine to sharpen taste
                  and ship work consistently.
                </p>
                <Link
                  href="/blog/daily-habit"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
                >
                  Read the full post
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <aside className="lg:col-span-5 lg:pl-2">
                <div className="rounded-3xl bg-slate-50 p-8 sm:p-10">
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Topics</p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900">Browse by category</h3>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Link
                      href="/blog/daily-habit"
                      className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-900 shadow-sm hover:border-zinc-300"
                    >
                      Study habits
                    </Link>
                    <Link
                      href="/blog/portfolio"
                      className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-900 shadow-sm hover:border-zinc-300"
                    >
                      Portfolio
                    </Link>
                    <Link
                      href="/blog/critique"
                      className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-900 shadow-sm hover:border-zinc-300"
                    >
                      Critique
                    </Link>
                    <Link
                      href="/courses"
                      className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-900 shadow-sm hover:border-zinc-300"
                    >
                      Courses
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
