import Image from "next/image";
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

  const otherSlugs = BLOG_SLUGS.filter((s) => s !== slug) as BlogSlug[];

  return (
    <>
      <InnerHero backgroundImage={post.heroImage} />

      <article className="bg-white pb-20 sm:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-12 sm:pt-16 reveal" data-reveal>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-100">
              <Image src={post.heroImage} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-zinc-500">{post.category}</p>
            <h1 className="mt-3 text-3xl font-bold leading-[1.1] tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">{post.title}</h1>
            <p className="mt-3 text-sm text-zinc-500">{post.readTime}</p>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">{post.excerpt}</p>
            <div className="prose prose-zinc max-w-none">
              {post.body.map((p, i) => (
                <p key={i} className="mb-6 text-lg leading-relaxed text-zinc-700">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <section className="mx-auto mt-20 max-w-5xl border-t border-zinc-200 pt-16 sm:mt-24 sm:pt-20 reveal" data-reveal>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Other stories</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {otherSlugs.map((s) => {
                const other = BLOG_POSTS[s];
                return (
                  <Link
                    key={s}
                    href={`/blog/${s}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:border-zinc-300 hover:shadow-md"
                  >
                    <div className="relative aspect-[16/10] shrink-0">
                      <Image
                        src={other.heroImage}
                        alt=""
                        fill
                        className="object-cover transition group-hover:brightness-95"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">{other.category}</p>
                      <p className="mt-2 text-lg font-bold leading-snug text-zinc-900 group-hover:underline">
                        {other.title}
                      </p>
                      <p className="mt-2 line-clamp-2 text-sm text-zinc-600">{other.excerpt}</p>
                      <p className="mt-auto pt-4 text-xs text-zinc-500">{other.readTime}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
