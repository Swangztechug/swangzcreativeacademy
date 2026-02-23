import { getContent } from "@/lib/content";

export const metadata = {
  title: "About Us - Swangz Creative Academy",
  description: "About our music academy.",
};

export default async function AboutPage() {
  const content = await getContent();
  const { about } = content;
  return (
    <section className="max-w-[85%] mx-auto px-6 md:px-10 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-6 text-white">
          {about.title}
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          {about.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-white">
            {about.title}
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">{about.intro}</p>
          <p className="text-gray-400 mb-6 leading-relaxed">{about.mission}</p>
          <div className="space-y-4 mb-8">
            {about.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-6 h-6 mt-1 text-gold flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="w-full h-full"
                  >
                    <path
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{h.title}</h4>
                  <p className="text-sm text-gray-400">{h.description}</p>
                </div>
              </div>
            ))}
          </div>
          <a
            href="/courses"
            className="inline-block bg-gold hover:bg-gold-dark text-dark px-8 py-3 rounded-full text-sm font-semibold transition-colors"
          >
            Explore Courses
          </a>
        </div>
        <div className="bg-dark-card border border-dark-border rounded-[2.5rem] p-8">
          <h3 className="text-2xl font-bold text-white mb-6">
            {about.statsHeading}
          </h3>
          <div className="space-y-6">
            {about.stats.map((stat, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">{stat.label}</span>
                  <span className="text-gold font-bold">{stat.value}</span>
                </div>
                <div className="w-full bg-dark-border rounded-full h-2">
                  <div
                    className="bg-gold h-2 rounded-full"
                    style={{
                      width:
                        stat.value === "92%"
                          ? "92%"
                          : stat.value === "98%"
                            ? "98%"
                            : "85%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {about.values.map((v, i) => (
          <div
            key={i}
            className="bg-dark-card border border-dark-border rounded-2xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-gold/20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
            <p className="text-sm text-gray-400">{v.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
