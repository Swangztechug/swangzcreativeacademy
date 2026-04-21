export type CourseSlug = "brand" | "motion" | "photo";

export const COURSES: Record<
  CourseSlug,
  {
    title: string;
    tagline: string;
    applyParam: string;
    heroImage: string;
    price: string;
    weeks: string;
  }
> = {
  brand: {
    title: "Brand & Identity Design",
    tagline:
      "Build a complete identity system—logo, typography, color, layout rules, and real-world applications—guided by critique and weekly milestones.",
    applyParam: "brand-identity",
    heroImage:
      "https://images.unsplash.com/photo-1526481280695-3c687fd5432c?auto=format&fit=crop&w=2400&q=80",
    price: "$249",
    weeks: "6 weeks",
  },
  motion: {
    title: "Motion & Animation",
    tagline: "Storyboards to polished motion—timing, easing, and motion systems for screens.",
    applyParam: "motion",
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=80",
    price: "$189",
    weeks: "8 weeks",
  },
  photo: {
    title: "Photo & Visual Storytelling",
    tagline: "Light, composition, editing, and sequencing—build a cohesive visual series.",
    applyParam: "photo-story",
    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2400&q=80",
    price: "$149",
    weeks: "6 weeks",
  },
};

export const COURSE_SLUGS = Object.keys(COURSES) as CourseSlug[];
