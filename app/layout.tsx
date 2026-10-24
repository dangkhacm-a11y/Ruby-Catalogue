import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "RUBY | Premium Material Catalogue",
  description: "A premium digital material catalogue for RUBY color collections and prepared 3D visual previews.",
  openGraph: {
    title: "RUBY | Premium Material Catalogue",
    description: "Explore RUBY colors, material details, and prepared 3D interior previews.",
    type: "website"
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
