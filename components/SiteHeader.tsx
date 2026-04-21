"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useId, useState } from "react";
import { NAV_ITEMS, isNavActive } from "@/lib/nav";

const pillActive = "rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm";
const pillIdle =
  "rounded-full px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10";
const mobileActive = "w-full rounded-full bg-white px-4 py-3 text-sm font-medium text-zinc-900 text-center shadow-sm";
const mobileIdle =
  "w-full rounded-full border border-white/25 bg-white/10 px-4 py-3 text-sm font-medium text-white/95 backdrop-blur-sm text-center hover:bg-white/15";

type Variant = "home" | "inner";

export function SiteHeader({ variant = "inner" }: { variant?: Variant }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <div className="relative flex min-h-10 items-center justify-center">
        <Link
          href="/"
          className="absolute left-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-lg font-bold text-white backdrop-blur-sm"
        >
          S
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full border border-white/20 bg-white/10 px-2 py-1.5 backdrop-blur-md md:flex"
          aria-label="Primary"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isNavActive(pathname, item.href) ? pillActive : pillIdle}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="absolute right-0 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:hidden"
          aria-controls={menuId}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div
        id={menuId}
        className={
          variant === "home"
            ? `md:hidden ${open ? "" : "hidden"} border-b border-white/10 bg-black/25 backdrop-blur-sm`
            : `md:hidden ${open ? "" : "hidden"} border-t border-white/10 mt-4 pt-4`
        }
      >
        {variant === "home" ? (
          <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <nav className="flex flex-col gap-1.5" aria-label="Primary">
              <MobileNavLinks pathname={pathname} onNavigate={close} />
            </nav>
          </div>
        ) : (
          <nav className="flex flex-col gap-1.5" aria-label="Primary">
            <MobileNavLinks pathname={pathname} onNavigate={close} />
          </nav>
        )}
      </div>
    </>
  );
}

function MobileNavLinks({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate: () => void;
}) {
  return (
    <>
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={isNavActive(pathname, item.href) ? mobileActive : mobileIdle}
          onClick={onNavigate}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}
