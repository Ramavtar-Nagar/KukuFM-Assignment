import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing the Inter font from Google Fonts
const inter = Inter({ subsets: ["latin"] });

// Metadata for the document head
export const metadata = {
  title: "KukuFm", // Title of the website
  description: "KukuFm App", // Description for the website
};

// RootLayout component that wraps around all pages
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Render children components inside the body */}
        {children}
      </body>
    </html>
  );
}
