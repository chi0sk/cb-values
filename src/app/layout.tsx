import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Counter Blox Value List 2025 (March) | Counter Blox Values",
  description: "Explore the Official Counter Blox Value List 2025 (March) where you can view the values for Rifles, Heavy, Knives, Gloves, Pistols, SMGs, and more! Elevate your Roblox trading experience today with our daily updated Counter Blox Values and information for the most accurate data to guide you!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={cn("min-h-screen bg-background antialiased")}>
        {children}
      </body>
    </html>
  );
}
