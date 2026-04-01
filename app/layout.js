// app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
// import FloatingButtons from "@/components/common/FloatingButtons";
import { siteSEO, getOrganizationSchema, getLocalBusinessSchema } from "@/utils/seoConfig";
import { GoogleAnalytics } from "@next/third-parties/google";
import { 
  headingFont, 
  bodyFont, 
  accentNumberFont 
} from "./fonts";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = false;

export const metadata = {
  metadataBase: new URL(siteSEO.baseUrl),
  title: {
    default: siteSEO.defaultTitle,
    template: `%s | ${siteSEO.shortName} Abacus Academy`,
  },
  description: siteSEO.defaultDescription,
  keywords:
    "abacus academy india, igenius abacus, abacus classes nashik, vedic math, rubik cube course, brain development kids, mental math training, abacus franchise india",
  authors: [{ name: siteSEO.siteName, url: siteSEO.baseUrl }],
  creator: siteSEO.siteName,
  publisher: siteSEO.siteName,
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: siteSEO.baseUrl },
  openGraph: {
    type: "website",
    locale: siteSEO.locale,
    url: siteSEO.baseUrl,
    siteName: siteSEO.siteName,
    title: siteSEO.defaultTitle,
    description: siteSEO.defaultDescription,
    images: [
      {
        url: siteSEO.defaultImage,
        width: 1200,
        height: 630,
        alt: "I-Genius Abacus Academy India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteSEO.defaultTitle,
    description: siteSEO.defaultDescription,
    images: [siteSEO.defaultImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "REPLACE_WITH_GOOGLE_VERIFICATION",
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Nashik, Maharashtra",
    "geo.position": "20.0059;73.7897",
    ICBM: "20.0059, 73.7897",
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = getOrganizationSchema();
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html 
      lang="en" 
      className={`
        ${headingFont.variable} 
        ${bodyFont.variable} 
        ${accentNumberFont.variable}
      `}
    >
      <head>
        <meta name="theme-color" content="#2F9B8C" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="antialiased bg-[#FEF9F0] text-[#1E2A32]" suppressHydrationWarning>
        <Navbar />
        <main className="pt-[72px] lg:pt-20">
          {children}
        </main>
        <Footer />
        {/* <FloatingButtons /> */}
        <GoogleAnalytics gaId={siteSEO.gaMeasurementId} />
      </body>
    </html>
  );
}