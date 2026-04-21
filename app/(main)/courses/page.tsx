import { getContent } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/lib/slug";

export const metadata = {
  title: "Courses - Swangz Creative Academy",
  description: "Explore our music courses.",
};

export default async function CoursesPage() {
  const content = await getContent();
  const { courses } = content;
  return (
    <section className="max-w-[85%] mx-auto px-6 md:px-10 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-6 text-white">
          {courses.title}
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          {courses.subtitle}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-16 text-sm font-semibold">
        {courses.categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`px-6 py-3 rounded-full transition-colors ${
              cat === "All Courses"
                ? "bg-gold text-dark"
                : "bg-dark-card border border-dark-border text-gray-400 hover:border-gold hover:text-gold"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.items.map((course, i) => (
          <div
            key={i}
            className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-gold transition-all group"
          >
            <Link href={`/courses/${slugify(course.title)}`} className="block">
              <div className="aspect-video bg-dark-border overflow-hidden relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized={course.image.startsWith("/") ? false : undefined}
                />
              </div>
            </Link>
            <div className="p-6">
              <span className="text-xs text-gold font-semibold uppercase tracking-wider">
                {course.category}
              </span>
              <Link
                href={`/courses/${slugify(course.title)}`}
                className="block mt-3 mb-2"
              >
                <h3 className="text-xl font-bold text-white hover:text-gold transition-colors">
                  {course.title}
                </h3>
              </Link>
              <p className="text-sm text-gray-400 mb-4">{course.description}</p>
              <div className="flex items-center justify-between text-sm mb-4">
                <span className="text-gray-400">{course.duration}</span>
                <span className="text-gold font-bold">{course.price}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                <span>{course.lessons}</span>
                {course.badge && (
                  <>
                    <span>•</span>
                    <span>{course.badge}</span>
                  </>
                )}
              </div>
              <Link
                href={`/courses/${slugify(course.title)}`}
                className="block w-full bg-gold hover:bg-gold-dark text-dark py-3 rounded-xl text-sm font-semibold transition-colors text-center"
              >
                Apply now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
