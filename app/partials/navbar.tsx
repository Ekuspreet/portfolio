"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { outfit } from "../fonts";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NavbarItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = NavbarItems.map((item) => item.href.replace("#", ""));
    const sections = sectionIds.map((id) => document.getElementById(id));

    function onScroll() {
      let current = "";
      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop - 100; // adjust offset for navbar height
          const sectionHeight = section.offsetHeight;
          if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
          ) {
            current = section.id;
          }
        }
      });
      setActiveSection(current);
    }

    window.addEventListener("scroll", onScroll);
    onScroll(); // set initial state
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <NavigationMenu
        className={
          "px-2 py-2 bg-neutral-800/40 outline rounded-lg top-2 mx-auto fixed z-50 backdrop-blur-xl mt-4  left-1/2 transform -translate-x-1/2 " +
          outfit.className
        }
      >
        <NavigationMenuList>
          {NavbarItems.map((item) => (
            <NavigationMenuItem key={item.name}>
              <Link href={item.href}>
                <Button
                  variant={
                    activeSection === item.href.replace("#", "")
                      ? "default"
                      : "outline"
                  }
                  size="sm"
                  className={`transition-all duration-500 ease-in-out hover:mx-1 cursor-pointer`}
                >
                  {item.name}
                </Button>
              </Link>
            </NavigationMenuItem>
          ))}
          |
          <a href="/EkuspreetSingh_Resume_Latest.pdf">
            <Button variant="outline" size="sm" className=" cursor-pointer">
              Résumé
            </Button>
          </a>
        </NavigationMenuList>
      </NavigationMenu>
    </motion.div>
  );
}
