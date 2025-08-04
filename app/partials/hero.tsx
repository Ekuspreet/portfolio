"use client";
import React from "react";
import Image from "next/image";
import { playfairDisplay } from "../fonts";
import Text from "./text";
import { motion } from "framer-motion";
import { content } from "../content";

const Hero = () => {
  return (
    <div className="relative h-dvh overflow-hidden flex items-center justify-center ">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#a885d4] via-[#c478a6] to-[#6fbcb1]  blur-3xl opacity-20" />
      <motion.div
        className="absolute inset-0 z-10"
        initial={{ opacity: 0, scale: 4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, ease: "anticipate" }}
      >
        <Image
          src="/herobg.png"
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover md:scale-125 opacity-20"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={
          "z-30 flex flex-col items-center" + " " + playfairDisplay.className
        }
      >
        <Text role="Heading" className="mb-2">
          {content.greeting}
        </Text>
        <Text role="Display">{content.hero_line_one}</Text>
        <Text role="Display">{content.hero_line_two}</Text>
        <Text role="Display">{content.hero_line_three}</Text>
      </motion.div>
    </div>
  );
};

export default Hero;
