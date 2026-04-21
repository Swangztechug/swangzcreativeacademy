import { getContent } from "@/lib/content";
import { HeroSection } from "@/components/home/HeroSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { TeamSection } from "@/components/home/TeamSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CareersSection } from "@/components/home/CareersSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BlogSection } from "@/components/home/BlogSection";

export default async function HomePage() {
  const content = await getContent();
  return (
    <>
      <HeroSection content={content.hero} />
      <SkillsSection content={content.skills} />
      <TeamSection content={content.team} />
      <section id="faqs">
        <FaqSection content={content.faqs} />
      </section>
      <section id="careers">
        <CareersSection content={content.careers} />
      </section>
      <TestimonialsSection content={content.testimonials} />
      <section id="blog">
        <BlogSection content={content.blog} />
      </section>
    </>
  );
}
