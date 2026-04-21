import Image from "next/image";
import Link from "next/link";
import type { SiteContent } from "@/lib/types";

export function BlogSection({ content }: { content: SiteContent["blog"] }) {
  return (
    <section className="max-w-[85%] mx-auto px-6 md:px-10 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-white">{content.title}</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">{content.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.posts.map((post, i) => (
          <article
            key={i}
            className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-gold transition-all group"
          >
            <div className="aspect-video bg-dark-border overflow-hidden relative">
              <Image
                src={post.image}
                alt=""
                fill
                className="object-cover"
                unoptimized={post.image.startsWith("/") ? false : undefined}
              />
            </div>
            <div className="p-6">
              <span className="text-xs text-gold font-semibold uppercase tracking-wider">
                {post.category}
              </span>
              <h3 className="text-xl font-bold text-white mt-3 mb-3 group-hover:text-gold transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{post.date}</span>
                <Link
                  href="/blog"
                  className="text-xs text-gold font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          href="/blog"
          className="inline-block border border-dark-border hover:border-gold text-white px-8 py-3 rounded-full text-sm font-semibold transition-colors"
        >
          {content.cta}
        </Link>
      </div>
    </section>
  );
}
