import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteMetadata, siteUrl } from "@/lib/metadata";
import { COMPANY_INFO } from "@/lib/constants";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

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
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en" className={`dark ${display.variable} ${serif.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* Google Tag Manager — head script */}
        {gtmId && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
        )}
      </head>
      <body className="bg-bg-dark text-white font-display antialiased">
        {/* Google Tag Manager — noscript fallback */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster position="top-center" toastOptions={{ style: { background: '#1e293b', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' } }} />
        {/* Microsoft Clarity */}
        {process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID && (
          <Script
            id="microsoft-clarity"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}