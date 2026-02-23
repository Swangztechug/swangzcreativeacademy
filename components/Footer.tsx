import Link from "next/link";
import type { SiteContent } from "@/lib/types";

export function Footer({
  footer: f,
  siteName,
}: {
  footer: SiteContent["footer"];
  siteName: string;
}) {
  return (
    <footer className="max-w-[85%] mx-auto px-6 md:px-10 py-20 border-t border-dark-border mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
        <div className="lg:col-span-2">
          <div className="text-2xl font-extrabold tracking-tighter mb-6 text-white">
            {siteName}<span className="text-gold">.</span>
          </div>
          <p className="text-sm text-gray-400 mb-6 leading-relaxed">{f.tagline}</p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-gray-400 hover:bg-gold hover:border-gold hover:text-dark transition-all"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-gray-400 hover:bg-gold hover:border-gold hover:text-dark transition-all"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-gray-400 hover:bg-gold hover:border-gold hover:text-dark transition-all"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-gray-400 hover:bg-gold hover:border-gold hover:text-dark transition-all"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h5 className="font-bold mb-6 text-sm text-white uppercase tracking-wider">
            Quick Links
          </h5>
          <ul className="space-y-4 text-[13px] font-semibold text-gray-400">
            {f.quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-6 text-sm text-white uppercase tracking-wider">
            Resources
          </h5>
          <ul className="space-y-4 text-[13px] font-semibold text-gray-400">
            {f.resources.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-6 text-sm text-white uppercase tracking-wider">
            {f.newsletterTitle}
          </h5>
          <p className="text-sm text-gray-400 mb-6">{f.newsletterSubtext}</p>
          <form className="relative flex items-center bg-dark-card border border-dark-border rounded-xl overflow-hidden focus-within:border-gold transition-colors mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent py-4 px-6 outline-none text-sm w-full text-white placeholder:text-gray-500"
            />
            <button
              type="submit"
              className="bg-gold hover:bg-gold-dark text-dark p-4 h-full transition-colors"
            >
              Go
            </button>
          </form>
          <p className="text-xs text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
      <div id="contact" className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-dark-border">
        <div>
          <p className="text-xs text-gray-400 mb-3 font-semibold uppercase">Email Us</p>
          <div className="space-y-2">
            <div>
              <p className="text-xs text-gray-500 mb-1">Sales:</p>
              <a
                href={`mailto:${f.contact.salesEmail}`}
                className="text-sm text-white hover:text-gold transition-colors"
              >
                {f.contact.salesEmail}
              </a>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Production Manager:</p>
              <a
                href={`mailto:${f.contact.productionEmail}`}
                className="text-sm text-white hover:text-gold transition-colors"
              >
                {f.contact.productionEmail}
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs text-gray-400 mb-3 font-semibold uppercase">Call Us</p>
          <div className="space-y-2">
            <div>
              <p className="text-xs text-gray-500 mb-1">Sales:</p>
              <a
                href={`tel:${f.contact.salesPhone.replace(/\s/g, "")}`}
                className="text-sm text-white hover:text-gold transition-colors"
              >
                {f.contact.salesPhone}
              </a>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Production Manager:</p>
              <a
                href={`tel:${f.contact.productionPhone.replace(/\s/g, "")}`}
                className="text-sm text-white hover:text-gold transition-colors"
              >
                {f.contact.productionPhone}
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs text-gray-400 mb-3 font-semibold uppercase">Visit Us</p>
          <div className="space-y-1">
            {f.contact.address.map((line) => (
              <p key={line} className="text-sm text-white">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 font-bold uppercase tracking-widest pt-10 border-t border-dark-border mt-8">
        <p>{f.copyright}</p>
        <div className="flex gap-8 mt-6 md:mt-0">
          {f.legal.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
