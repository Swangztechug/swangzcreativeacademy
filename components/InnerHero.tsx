import { SiteHeader } from "@/components/SiteHeader";

export function InnerHero({
  backgroundImage,
  children,
}: {
  backgroundImage: string;
  children: React.ReactNode;
}) {
  return (
    <header
      className="relative bg-zinc-900 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.62) 100%), url(${backgroundImage})`,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-6">
        <SiteHeader variant="inner" />
        {children}
      </div>
    </header>
  );
}
