import {
  Bungee,
  Geist,
  Geist_Mono,
  Outfit,
  Passion_One,
  Playfair_Display,
  Gasoek_One,
  Baloo_2,
  Dela_Gothic_One,
  Montserrat,
} from "next/font/google";

export const bungee = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "900"],
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});
