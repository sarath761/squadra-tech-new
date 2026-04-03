import { metadataHowWeDo } from "@/lib/metadata";
import { siteUrl } from "@/lib/metadata";

export const metadata = metadataHowWeDo;

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
    { "@type": "ListItem", position: 2, name: "Our Process", item: `${siteUrl}/our-process/` },
  ],
};

export default function HowWeDoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}