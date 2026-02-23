import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { getContent } from "@/lib/content";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const content = await getContent();
  return (
    <>
      <Nav siteName={content.siteName} />
      {children}
      <Footer footer={content.footer} siteName={content.siteName} />
    </>
  );
}
