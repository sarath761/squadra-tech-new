import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteMetadata, siteUrl } from "@/lib/metadata";
import { COMPANY_INFO } from "@/lib/constants";
import { Toaster } from "react-hot-toast";

const display = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const serif = Instrument_Serif({ 
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata = siteMetadata;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Squadra Tech",
  legalName: COMPANY_INFO.parent,
  url: siteUrl,
  logo: `${siteUrl}/images/squadra-media.png`,
  description:
    "AI-Powered Technology Partner for Enterprise Growth. We help enterprises modernize, automate, and scale with secure, future-ready technology.",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "5th Floor, No. 1134, Shreeram Niwas, 100 Feet Rd, HAL 2nd Stage",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560038",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: COMPANY_INFO.phone,
    contactType: "sales",
    email: COMPANY_INFO.emailL1,
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${display.variable} ${serif.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      {/* We apply bg-bg-dark and text-white in globals.css for body, so we don't strictly need them here, but keeping it explicit is good. */}
      {/* Selection colors are also in globals.css */}
      <body className="bg-bg-dark text-white font-display antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster position="top-center" toastOptions={{ style: { background: '#1e293b', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' } }} />
      </body>
    </html>
  );
}
