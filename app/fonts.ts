import {
  Outfit,
  Playfair_Display,
  Montserrat,
} from "next/font/google";

export const bungee = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "900"],
});
export const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});
