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
  title: "Pranay Masulkar | Frontend Developer | React & Web Development Portfolio",
  description: "Explore the portfolio of Pranay Masulkar, a passionate Frontend Developer specializing in React, modern UI/UX, and interactive web applications. Open to new opportunities, creating responsive, client-approved digital experiences.",
  keywords: "Pranay Masulkar, Frontend Developer, React Developer, Web Developer, Portfolio, JavaScript, UI/UX, Vite, Interactive Websites, Hire Frontend Developer",
  author: "Pranay Masulkar",
  robots: "index, follow",
  openGraph: {
    title: "Pranay Masulkar | Frontend Developer Portfolio",
    description: "Frontend Developer specializing in React and interactive web experiences. Open to new opportunities.",
    url: "https://pranaymasulkar.com",
    siteName: "Pranay Masulkar Portfolio",
    images: [
      {
        url: "https://pranaymasulkar.com/preview-image.jpg",
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
    title: "Pranay Masulkar | Frontend Developer Portfolio",
    description: "Frontend Developer specializing in React and modern web development. Explore my projects!",
    images: ["https://pranaymasulkar.com/preview-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
