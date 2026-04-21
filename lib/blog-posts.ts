export type BlogSlug = "daily-habit" | "portfolio" | "critique";

export const BLOG_POSTS: Record<
  BlogSlug,
  {
    title: string;
    category: string;
    readTime: string;
    heroImage: string;
    excerpt: string;
    body: string[];
  }
> = {
  "daily-habit": {
    title: "How to build a daily creative habit (without burning out)",
    category: "Process",
    readTime: "6 min read",
    heroImage:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=2400&q=80",
    excerpt:
      "A simple system you can repeat: tiny constraints, visible output, and feedback loops that keep you moving.",
    body: [
      "Start smaller than you think. Ten minutes of focused making beats an hour of distracted browsing.",
      "Pick one constraint each week: a palette, a typeface, or a single aspect ratio.",
      "Ship something visible every day—even a thumbnail sketch counts.",
      "Review weekly: what worked, what to tweak, and what to try next.",
    ],
  },
  portfolio: {
    title: "Portfolios that feel like you",
    category: "Portfolio",
    readTime: "8 min read",
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2400&q=80",
    excerpt: "Curate for clarity. Lead with the work that sounds like your voice, not every project you’ve ever touched.",
    body: [
      "Lead with three strong projects. Depth beats breadth for first impressions.",
      "Write short case studies: problem, process, outcome—one paragraph each.",
      "Show process artifacts sparingly; they should support the story, not replace it.",
    ],
  },
  critique: {
    title: "What critique culture changes",
    category: "Studio notes",
    readTime: "5 min read",
    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2400&q=80",
    excerpt: "Good critique is specific, kind, and actionable—focused on the work, not the person.",
    body: [
      "Ask what the piece is trying to do before suggesting changes.",
      "Offer one or two concrete directions instead of a laundry list.",
      "Separate taste from goals: not ‘I don’t like it’ but ‘this may not meet the brief because…’",
    ],
  },
};

export const BLOG_SLUGS = Object.keys(BLOG_POSTS) as BlogSlug[];
