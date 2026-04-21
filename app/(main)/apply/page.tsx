import { getContent } from "@/lib/content";
import { ApplyForm } from "@/components/ApplyForm";

export const metadata = {
  title: "Apply for a Course - Swangz Creative Academy",
  description: "Apply to enroll in a course.",
};

type SearchParams = { course?: string };

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const content = await getContent();
  const courses = content.courses.items.map((c) => c.title);
  const { course: preselected } = await searchParams;
  const applyContent = content.applyPage ?? {
    title: "Apply for a course",
    subtitle:
      "Fill in your details and the course you want to join. We'll get back to you with next steps.",
  };
  return (
    <section className="max-w-[85%] mx-auto px-6 md:px-10 py-20">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">{applyContent.title}</h1>
        <p className="text-gray-400 mb-10">{applyContent.subtitle}</p>
        <ApplyForm
          courseOptions={courses}
          preselectedCourse={preselected ?? undefined}
        />
      </div>
    </section>
  );
}
