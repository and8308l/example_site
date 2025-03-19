import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/navbar/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Example Site",
  description: "",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Navbar
          items={[
            { label: "Home", path: "/" },
            { label: "Fade", path: "/fade" },
            { label: "Swipe", path: "/swipe" },
            { label: "Scroll", path: "/scroll" },
          ]}
        />
        {children}
      </body>
    </html>
  );
}
