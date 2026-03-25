import type { Metadata } from 'next';

export const siteName = "Squadra Tech | AI-Powered Technology Partner for Enterprise Growth";
export const siteDescription = "Squadra Tech helps enterprises modernize, automate, and scale with secure, future-ready technology. E-commerce, mobile apps, cloud, DevOps, LMS. Based in Bangalore.";
export const siteUrl = "https://squadratech.com";

export const siteMetadata: Metadata = {
  title: siteName,
  description: siteDescription,
  openGraph: {
    title: "Squadra Tech | AI-Powered Technology Partner",
    description: "We help enterprises modernize, automate, and scale.",
    url: siteUrl,
    siteName: siteName,
    type: "website",
  },
};

export const metadataHome: Metadata = {
  ...siteMetadata,
};

export const metadataServices: Metadata = {
  title: "Services | " + siteName,
  description: "Explore Squadra Tech's technology services, including mobile app development, e-commerce, CRM, LMS, cloud architecture, and DevOps.",
  openGraph: {
    ...siteMetadata.openGraph,
    title: "Services | Squadra Tech",
    url: siteUrl + "/services",
  },
};

export const metadataCaseStudies: Metadata = {
  title: "Case Studies | " + siteName,
  description: "Read our case studies to see how Squadra Tech has enabled growth and digital transformation for enterprises globally.",
  openGraph: {
    ...siteMetadata.openGraph,
    title: "Case Studies | Squadra Tech",
    url: siteUrl + "/case-studies",
  },
};

export const metadataHowWeDo: Metadata = {
  title: "How We Do | " + siteName,
  description: "Discover our 6-step fully transparent process from brief to live site, showcasing how Squadra Tech guarantees project success without surprises.",
  openGraph: {
    ...siteMetadata.openGraph,
    title: "How We Do | Squadra Tech",
    url: siteUrl + "/how-we-do",
  },
};

export const metadataAbout: Metadata = {
  title: "About Us | " + siteName,
  description: "Learn about Squadra Tech, the technology division of Squadra Media based in Bangalore. Meet our team of experts driving AI, DevOps, and cloud solutions.",
  openGraph: {
    ...siteMetadata.openGraph,
    title: "About Us | Squadra Tech",
    url: siteUrl + "/about",
  },
};

export const metadataContact: Metadata = {
  title: "Contact Us | " + siteName,
  description: "Get in touch with Squadra Tech in Bangalore to start your next enterprise technology project. We offer free assessments.",
  openGraph: {
    ...siteMetadata.openGraph,
    title: "Contact Us | Squadra Tech",
    url: siteUrl + "/contact",
  },
};
