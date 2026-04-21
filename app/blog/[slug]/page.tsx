import Link from "next/link";
import { notFound } from "next/navigation";
import { InnerHero } from "@/components/InnerHero";
import { BLOG_POSTS, BLOG_SLUGS, type BlogSlug } from "@/lib/blog-posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS[slug as BlogSlug];
  if (!post) return { title: "Blog" };
  return { title: post.title };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS[slug as BlogSlug];
  if (!post) notFound();

  return (
    <>
      <InnerHero backgroundImage={post.heroImage}>
        <div className="mt-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/70">{post.category}</p>
          <h1 className="mt-3 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-white/80">{post.readTime}</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">{post.excerpt}</p>
        </div>
      </InnerHero>

      <article className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 reveal" data-reveal>
          <div className="prose prose-zinc max-w-none">
            {post.body.map((p, i) => (
              <p key={i} className="mb-6 text-lg leading-relaxed text-zinc-700">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4 border-t border-zinc-200 pt-10">
            <Link href="/blog" className="text-sm font-semibold text-zinc-900 underline-offset-4 hover:underline">
              ← All posts
            </Link>
            <Link href="/courses" className="text-sm font-semibold text-zinc-900 underline-offset-4 hover:underline">
              View courses
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
