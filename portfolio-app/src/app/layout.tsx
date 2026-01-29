import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xhantilomzi Samela | Front-end Developer & UI/UX Designer",
  description: "Portfolio of Xhantilomzi Samela, a modern front-end developer and UI/UX designer focused on premium digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
