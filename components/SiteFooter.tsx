import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-black text-white reveal" data-reveal>
      <div className="container mx-auto px-4 py-16 sm:py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Your next creative chapter starts with one focused hour a day
          </h2>
          <Link
            href="/courses"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-100"
          >
            Explore courses
          </Link>
        </div>

        <div className="mt-16 grid gap-10 border-t border-white/10 pt-16 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-white">Academy</h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li>
                <Link href="/contact" className="transition hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="transition hover:text-white">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="transition hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="transition hover:text-white">
                  Instructors
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Learning</h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li>
                <Link href="/blog" className="transition hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/courses" className="transition hover:text-white">
                  Certificates
                </Link>
              </li>
              <li>
                <Link href="/apply" className="transition hover:text-white">
                  Scholarships
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Support</h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Help center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Terms &amp; privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-8 border-t border-white/10 pt-10 lg:flex-row lg:items-center lg:justify-between">
          <Link
            href="/"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-lg font-bold text-white"
          >
            S
          </Link>

          <div className="hidden lg:block" />

          <div className="flex items-center justify-center gap-2 lg:justify-end">
            <a
              href="https://instagram.com"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-zinc-200 transition hover:bg-white/10"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram text-[18px]" aria-hidden />
            </a>
            <a
              href="https://x.com"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-zinc-200 transition hover:bg-white/10"
              aria-label="Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-x-twitter text-[18px]" aria-hidden />
            </a>
            <a
              href="https://youtube.com"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-zinc-200 transition hover:bg-white/10"
              aria-label="YouTube"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-youtube text-[18px]" aria-hidden />
            </a>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-zinc-500">
          © {year} Swangz Creative Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
