import type { Metadata } from "next";

export const siteName = "Squadra Tech | AI-Powered Technology Partner for Enterprise Growth";
export const siteDescription =
  "Squadra Tech helps enterprises modernize, automate, and scale with secure, future-ready technology. E-commerce, mobile apps, cloud, DevOps, LMS. Based in Bangalore.";
export const siteUrl = "https://squadratech.com";

const ogImage = {
  url: "/images/og-image.png",
  width: 1200,
  height: 630,
  alt: "Squadra Tech — AI-Powered Technology Partner for Enterprise Growth",
};

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description: siteDescription,
  openGraph: {
    title: "Squadra Tech | AI-Powered Technology Partner",
    description: siteDescription,
    url: siteUrl,
    siteName: "Squadra Tech",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Squadra Tech | AI-Powered Technology Partner",
    description: siteDescription,
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export const metadataHome: Metadata = {
  ...siteMetadata,
};

export const metadataServices: Metadata = {
  title: "Services | Squadra Tech",
  description:
    "Explore Squadra Tech's technology services, including mobile app development, e-commerce, CRM, LMS, cloud architecture, and DevOps.",
  openGraph: {
    title: "Services | Squadra Tech",
    description:
      "Explore Squadra Tech's technology services, including mobile app development, e-commerce, CRM, LMS, cloud architecture, and DevOps.",
    url: "/services/",
    siteName: "Squadra Tech",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Squadra Tech",
    description:
      "Explore Squadra Tech's technology services, including mobile app development, e-commerce, CRM, LMS, cloud architecture, and DevOps.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "/services/",
  },
};

export const metadataCaseStudies: Metadata = {
  title: "Case Studies | Squadra Tech",
  description:
    "Read our case studies to see how Squadra Tech has enabled growth and digital transformation for enterprises globally.",
  openGraph: {
    title: "Case Studies | Squadra Tech",
    description:
      "Read our case studies to see how Squadra Tech has enabled growth and digital transformation for enterprises globally.",
    url: "/case-studies/",
    siteName: "Squadra Tech",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Squadra Tech",
    description:
      "Read our case studies to see how Squadra Tech has enabled growth and digital transformation for enterprises globally.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "/case-studies/",
  },
};

export const metadataHowWeDo: Metadata = {
  title: "How We Do | Squadra Tech",
  description:
    "Discover our 6-step fully transparent process from brief to live site, showcasing how Squadra Tech guarantees project success without surprises.",
  openGraph: {
    title: "How We Do | Squadra Tech",
    description:
      "Discover our 6-step fully transparent process from brief to live site, showcasing how Squadra Tech guarantees project success without surprises.",
    url: "/how-we-do/",
    siteName: "Squadra Tech",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "How We Do | Squadra Tech",
    description:
      "Discover our 6-step fully transparent process from brief to live site, showcasing how Squadra Tech guarantees project success without surprises.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "/how-we-do/",
  },
};

export const metadataAbout: Metadata = {
  title: "About Us | Squadra Tech",
  description:
    "Learn about Squadra Tech, the technology division of Squadra Media based in Bangalore. Meet our team of experts driving AI, DevOps, and cloud solutions.",
  openGraph: {
    title: "About Us | Squadra Tech",
    description:
      "Learn about Squadra Tech, the technology division of Squadra Media based in Bangalore. Meet our team of experts driving AI, DevOps, and cloud solutions.",
    url: "/about/",
    siteName: "Squadra Tech",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Squadra Tech",
    description:
      "Learn about Squadra Tech, the technology division of Squadra Media based in Bangalore. Meet our team of experts driving AI, DevOps, and cloud solutions.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "/about/",
  },
};

export const metadataContact: Metadata = {
  title: "Contact Us | Squadra Tech",
  description:
    "Get in touch with Squadra Tech in Bangalore to start your next enterprise technology project. We offer free assessments.",
  openGraph: {
    title: "Contact Us | Squadra Tech",
    description:
      "Get in touch with Squadra Tech in Bangalore to start your next enterprise technology project. We offer free assessments.",
    url: "/contact/",
    siteName: "Squadra Tech",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Squadra Tech",
    description:
      "Get in touch with Squadra Tech in Bangalore to start your next enterprise technology project. We offer free assessments.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "/contact/",
  },
};
