"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/apply", label: "Apply" },
  { href: "/tutors", label: "Meet Tutors" },
  { href: "/about", label: "About Us" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Nav({ siteName = "Swangz Creative Academy" }: { siteName?: string }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  if (isAdmin) return null;

  return (
    <nav className="flex items-center justify-between px-6 md:px-10 py-6 max-w-[85%] mx-auto">
      <Link
        href="/"
        className="text-2xl font-extrabold tracking-tighter text-white"
      >
        {siteName}<span className="text-gold">.</span>
      </Link>
      <div className="hidden lg:flex space-x-10 text-[13px] font-semibold text-gray-400">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={
              pathname === href
                ? "text-gold transition-colors"
                : "hover:text-gold transition-colors"
            }
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="flex items-center space-x-6">
        <Link
          href="/admin"
          className="text-xs text-gray-500 hover:text-gold transition-colors"
        >
          Admin
        </Link>
        <Link
          href="/contact"
          className="bg-gold hover:bg-gold-dark text-dark px-7 py-2.5 rounded-full text-[13px] font-semibold transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
