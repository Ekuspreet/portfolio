"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { playfairDisplay } from "../fonts";
import Text from "./text";
import { content } from "../content";

const About = () => {
  return (
    <section
      id="about"
      className={`${playfairDisplay.className} relative w-full py-24 px-4 flex flex-col items-center bg-transparent overflow-hidden`}
    >
      {/* Scoped Background Animation */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        initial={{ opacity: 0, scale: 1.5 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2 }}
      >
        <Image
          src="/about.png"
          alt="Decorative background"
          width={1200} // experiment with size
          height={1200}
          className="object-contain pointer-events-none select-none scale-[200%]"
        />
      </motion.div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-16">
        <Text role="Display">About Me</Text>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-10 max-w-6xl w-full">
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
        <div className="flex-1 flex flex-col space-y-4 max-w-full text-white">
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
            className="text-justify break-words leading-relaxed"
          >
            {content.brief_description}
          </Text>
        </div>
      </div>
    </section>
  );
};

export default About;
