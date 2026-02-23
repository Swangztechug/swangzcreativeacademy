import { getContent } from "@/lib/content";
import Image from "next/image";

export const metadata = {
  title: "Meet the Tutors - Swangz Creative Academy",
  description: "Learn from industry professionals.",
};

export default async function TutorsPage() {
  const content = await getContent();
  const { tutors } = content;
  return (
    <section className="max-w-[85%] mx-auto px-6 md:px-10 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-6 text-white">
          {tutors.title}
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          {tutors.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {tutors.items.map((tutor, i) => (
          <div
            key={i}
            className="bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-gold transition-all text-center"
          >
            <div className="w-32 h-32 rounded-full bg-dark-border mb-6 mx-auto overflow-hidden relative aspect-square">
              <Image
                src={tutor.image}
                alt={tutor.name}
                fill
                className="object-cover"
                unoptimized={tutor.image.startsWith("/") ? false : undefined}
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{tutor.name}</h3>
            <p className="text-sm text-gold mb-3">{tutor.role}</p>
            <p className="text-xs text-gray-400 mb-4">{tutor.bio}</p>
            <div className="text-xs text-gray-500 mb-4 space-y-1">
              <p className="font-semibold text-gray-400">Courses:</p>
              {tutor.courses.map((c) => (
                <p key={c}>{c}</p>
              ))}
            </div>
            <div className="flex justify-center gap-2 mb-4 flex-wrap">
              {tutor.badges.map((b) => (
                <span
                  key={b}
                  className="text-xs bg-gold/20 text-gold px-3 py-1 rounded-full"
                >
                  {b}
                </span>
              ))}
            </div>
            <button
              type="button"
              className="w-full border border-dark-border hover:border-gold text-white py-2 rounded-xl text-sm font-semibold transition-colors"
            >
              View Profile
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
