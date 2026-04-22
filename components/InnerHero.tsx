import { SiteHeader } from "@/components/SiteHeader";

/** Shared inner-page hero (not used on home). Same minimum height everywhere; grows if content needs more room. */
export function InnerHero({
  backgroundImage,
  children,
}: {
  backgroundImage: string;
  children?: React.ReactNode;
}) {
  return (
    <header
      className="relative flex min-h-[clamp(18rem,48vh,34rem)] flex-col bg-zinc-900 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.62) 100%), url(${backgroundImage})`,
      }}
    >
      <div className="container mx-auto flex min-h-0 flex-1 flex-col px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <SiteHeader variant="inner" />
        {children != null ? <div className="flex min-h-0 flex-1 flex-col justify-end">{children}</div> : null}
      </div>
    </header>
  );
}
