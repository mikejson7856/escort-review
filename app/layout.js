import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Review",
  description: "Review",
  openGraph: {
    title: "Review",
    description: "Review",
    url: "https://escortbabylon-review.online",
    siteName: "YourSiteName",
    images: [
      {
        url: "https://newsite-livid.vercel.app/reviewmeta.jpg",
        width: 1200,
        height: 630,
        alt: "Review Meta Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "Review",
    title: "Review",
    description: "Review",
    images: ["https://newsite-livid.vercel.app/reviewmeta.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
