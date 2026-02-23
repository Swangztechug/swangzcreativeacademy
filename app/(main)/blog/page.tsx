import { getContent } from "@/lib/content";
import Image from "next/image";

export const metadata = {
  title: "Blog - Swangz Creative Academy",
  description: "Academy blog and insights.",
};

export default async function BlogPage() {
  const content = await getContent();
  const { blog } = content;
  return (
    <section className="max-w-[85%] mx-auto px-6 md:px-10 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-6 text-white">
          {blog.title}
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          {blog.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blog.posts.map((post, i) => (
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
                <span className="text-xs text-gold font-semibold hover:underline cursor-pointer">
                  Read More →
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
