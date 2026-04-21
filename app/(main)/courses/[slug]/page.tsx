import { getContent } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { slugify } from "@/lib/slug";
import { ApplyForm } from "@/components/ApplyForm";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const content = await getContent();
  const course = content.courses.items.find(
    (c) => slugify(c.title) === slug
  );
  if (!course) return { title: "Course - Swangz Creative Academy" };
  return {
    title: `${course.title} - Swangz Creative Academy`,
    description: course.description,
  };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const content = await getContent();
  const course = content.courses.items.find(
    (c) => slugify(c.title) === slug
  );
  if (!course) notFound();

  return (
    <section className="max-w-[85%] mx-auto px-6 md:px-10 py-20">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/courses"
          className="inline-block text-sm text-gray-400 hover:text-gold mb-8 transition-colors"
        >
          ← Back to courses
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="aspect-video rounded-2xl overflow-hidden bg-dark-card border border-dark-border relative">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                unoptimized={course.image.startsWith("/") ? false : undefined}
                priority
              />
            </div>
            <span className="text-xs text-gold font-semibold uppercase tracking-wider">
              {course.category}
            </span>
            <h1 className="text-4xl font-bold text-white">{course.title}</h1>
            <p className="text-lg text-gray-300">{course.description}</p>
            <div className="flex flex-wrap gap-6 text-sm">
              <span className="text-gray-400">{course.duration}</span>
              <span className="text-gold font-bold">{course.price}</span>
              <span className="text-gray-400">{course.lessons}</span>
              {course.badge && (
                <span className="text-gray-400">{course.badge}</span>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-dark-card border border-dark-border rounded-2xl p-6 sticky top-24">
              <h2 className="text-xl font-bold text-white mb-4">
                Apply for this course
              </h2>
              <p className="text-sm text-gray-400 mb-6">
                Submit your details and we&apos;ll get back to you with next steps.
              </p>
              <ApplyForm
                courseOptions={[course.title]}
                preselectedCourse={course.title}
                fixedCourse
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
