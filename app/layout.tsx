import "./globals.css";
import Providers from "./Providers";
import type { ReactNode } from "react";

export const metadata = {
  title: "Nadeeka Sachinthana | Portfolio",
  description: "Software Engineering Undergraduate Portfolio",
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