import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./partials/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { geistSans, geistMono, outfit, playfairDisplay } from "./fonts";

export const metadata: Metadata = {
  title: "Ekuspreet | Portfolio",
  description: "Portfolio Website of Ekuspreet Singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${playfairDisplay.variable} relative antialiased scroll-smooth `}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
