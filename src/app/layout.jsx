import "./globals.css";
// import { Funnel_Display } from "next/font/google";
import MyDataContex from "../context/MyDataContex";
import LoaderTwo from "@/layout/LoaderTwo";
import localFont from "next/font/local";

const funnelDisplay = localFont({
  src: "../../public/fonts/FunnelDisplay.woff2",
  variable: "--font-funnel-display",
});
// const funnelDisplay = Funnel_Display({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800"],
// });



export const metadata = {
  title: "Pranay Masulkar | Frontend Developer | React & Web Development Portfolio | Open to new opportunities.",
  description: "Welcome to My portfolio website, Hi I am Pranay Masulkar a passionate Frontend Developer specializing in React, modern UI/UX, and interactive web applications. Open to new opportunities, creating responsive, client-approved digital experiences.",
  metadataBase: new URL("https://www.pranaymasulkar.com"),
  keywords: "Pranay Masulkar, Frontend Developer, React Developer, Next Js Developer, Web Developer, JavaScript, UI/UX, Redux, Interactive Websites, Hire Frontend Developer",
  author: "Pranay Masulkar",
  creator: "Pranay Masulkar",
  publisher: "Pranay Masulkar",
  manifest: "/manifest.json",
  openGraph: {
    title: "Pranay Masulkar | Frontend Developer | React & Web Development Portfolio | Open to new opportunities.",
    description: "Welcome to My portfolio website, Hi I am Pranay Masulkar a passionate Frontend Developer specializing in React, modern UI/UX, and interactive web applications. Open to new opportunities, creating responsive, client-approved digital experiences.",
    url: "https://www.pranaymasulkar.com",
    siteName: "Pranay Masulkar Portfolio",
    images: [
      {
        url: "https://www.pranaymasulkar.com/preview-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pranay Masulkar Portfolio Preview",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranay Masulkar | Frontend Developer | React & Web Development Portfolio | Open to new opportunities.",
    description: "Welcome to My portfolio website, Hi I am Pranay Masulkar a passionate Frontend Developer specializing in React, modern UI/UX, and interactive web applications. Open to new opportunities, creating responsive, client-approved digital experiences.",
    images: ["https://www.pranaymasulkar.com/preview-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://www.pranaymasulkar.com/",
    languages: {
      "en-US": "https://www.pranaymasulkar.com/",
      "en-GB": "https://www.pranaymasulkar.com/uk/",
      "es-ES": "https://www.pranaymasulkar.com/es/",
      "hi-IN": "https://www.pranaymasulkar.com/hi/",
      "x-default": "https://www.pranaymasulkar.com/",
    },
  },
  other: {
    distribution: "Global",
    Language: "English",
    YahooSeeker: "INDEX, FOLLOW",
    msnbot: "INDEX, FOLLOW",
    rating: "General",
    robots: "noydir,noodp",
    "allow-search": "yes",
    "revisit-after": "1 days",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

export const viewport = {
  themeColor: "#5ebf55",
  width: "device-width",
  initialScale: 1,
  distribution: "Global",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GD2EK9MMW7"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GD2EK9MMW7', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body
        className={`${funnelDisplay.className} bg-[#161616]`}
      >
        <MyDataContex>
          <LoaderTwo />
          {children}
        </MyDataContex>
      </body>
    </html>
  );
}
