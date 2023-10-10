import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GDSC Medicaps University",
  image: "",
  type: "website",
  description: "This is the leaderboard for the GDSC Study Jams.",
  keywords: ["gccp", "jams", "mu", "gdscmu"],
  robots: "index,follow",

  "og:title": "GDSC MU Leaderboard",
  "og:image": "",
  "og:description": "This is the leaderboard for the GDSC MU Jams.",
  "twitter:card": "summary_large_image",
  "twitter:title": "GDSC MU Leaderboard",
  "twitter:description": "This is the leaderboard for the GDSC MU Jams.",
  "twitter:image": "",
  "twitter:site": "@gdscmu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <head></head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
