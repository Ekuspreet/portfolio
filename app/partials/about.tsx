"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { playfairDisplay } from "../fonts";
import Text from "./text";
import { content } from "../content";
import { Separator } from "@/components/ui/separator";
import Education from "./education";
import Experience from "./experience";

const About = () => {
  return (
    <section
      id="about"
      className={`${playfairDisplay.className} outline backdrop-blur-3xl relative w-11/12 mx-auto pt-12 mt-12 rounded-xl px-4 flex flex-col items-center bg-transparent overflow-hidden`}
    >
      {/* Animated Background Image */}
      <motion.div
        className="absolute inset-0 z-0 -left-1/2 "
        initial={{ opacity: 0, scale: 2 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/about.png"
          alt="Decorative background"
          fill
          className="pointer-events-none select-none object-cover"
          priority
        />
      </motion.div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-4">
        <Text role="Hero">.about </Text>
      </div>

      {/* Blurry Container wrapping entire content */}
      <div className="relative z-10 w-full max-w-6xl rounded-xl  p-6 space-y-12">
        {/* Image + Text Row */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Profile Image */}
          <div className="relative w-64 aspect-square overflow-hidden rounded-2xl shadow-lg shrink-0">
            <Image
              src="/profile.jpg"
              fill
              alt="Profile Picture"
              className="object-cover scale-110"
            />
          </div>

          {/* Text Block */}
          <div className="flex-1 flex flex-col max-w-full text-white">
            <Text role="Heading" className="text-center md:text-left">
              {content.name}
            </Text>
            <Text
              role="Subheading"
              className="text-white/70 text-center md:text-left"
            >
              {content.designation}
            </Text>
            <Text
              role="Paragraph"
              className="text-justify break-words leading-relaxed mt-5"
            >
              {content.brief_description}
            </Text>
          </div>
        </div>

        <Separator />
        {/* Work Experience Section */}
        <section>
          <Education />
        </section>
        <Separator />
        {/* Skills Section */}
        <section>
          <Experience />
        </section>
      </div>
    </section>
  );
};

export default About;
