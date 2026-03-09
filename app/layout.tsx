import "./globals.css";
import Providers from "./Providers";
import type { ReactNode } from "react";

export const metadata = {
  title: "Nadeeka Sachinthana | Full Stack Developer & Software Engineer",
  description: "Professional full stack developer specializing in web and mobile applications. Expert in React, Next.js, Flutter, and modern technologies. Available for freelance projects.",
  keywords: ["Full Stack Developer", "Web Developer", "Mobile App Developer", "React Developer", "Flutter Developer", "Freelance Developer", "Software Engineer"],
  openGraph: {
   title: "Nadeeka Sachinthana | Full Stack Developer",
   description: "Building exceptional web and mobile applications that drive business growth",
   type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}