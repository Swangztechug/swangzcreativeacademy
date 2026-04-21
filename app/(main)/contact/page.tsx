import { getContent } from "@/lib/content";
import { ContactPageClient } from "@/components/ContactPageClient";

export const metadata = {
  title: "Contact - Swangz Creative Academy",
  description: "Get in touch with us.",
};

export default async function ContactPage() {
  const content = await getContent();
  const cp = content.contactPage ?? {
    title: "Contact Us",
    subtitle:
      "Send us a message and we'll get back to you as soon as we can.",
  };
  return (
    <ContactPageClient title={cp.title} subtitle={cp.subtitle} />
  );
}
