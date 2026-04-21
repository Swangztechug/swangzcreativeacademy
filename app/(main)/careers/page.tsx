import { getContent } from "@/lib/content";
import { CareersSection } from "@/components/home/CareersSection";

export const metadata = {
  title: "Careers - Swangz Creative Academy",
  description: "Career paths in music.",
};

export default async function CareersPage() {
  const content = await getContent();
  return (
    <section className="max-w-[85%] mx-auto px-6 md:px-10 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-6 text-white">
          {content.careers.title}
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          {content.careers.subtitle}
        </p>
      </div>
      <CareersSection content={content.careers} />
    </section>
  );
}
