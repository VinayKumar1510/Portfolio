import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vinay&apos;s Portfolio | Full Stack Developer",
  description: "Welcome to my portfolio! I&apos;m a passionate Full Stack Developer creating amazing web experiences with modern technologies.",
  keywords: "portfolio, developer, full stack, web development, next.js, react",
  author: "Vinay",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
