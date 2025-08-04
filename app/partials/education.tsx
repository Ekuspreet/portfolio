"use client";
import { motion } from "framer-motion";
import Text from "./text";
import { content } from "../content";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Education = () => {
  return (
    <>
      <div className="text-center mb-12 max-w-">
        <Text role="Large" className="">
          Education
        </Text>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative border-l border-white/20 pl-6 space-y-16"
      >
        {content.education.map((itemData, index) => (
          <motion.div
            key={index}
            variants={item}
            className="relative flex gap-5"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-8 top-2 w-4 h-4 rounded-full border border-white shadow-[0_0_10px_2px_rgba(255,255,255,0.1)]" />

            {/* Text Content */}
            <div className="flex flex-col">
              <Text role="Paragraph" className="text-white/90">
                {itemData.date}
              </Text>

              {/* Degree */}
              <Text role="Title" className="mt-3">
                {itemData.degree}
              </Text>

              {/* Institute */}
              <Text role="Paragraph" className="text-white/70">
                {itemData.institute}
              </Text>

              {/* Score */}
              {itemData.score && (
                <Text role="Paragraph" className="text-white/90 mt-2">
                  {itemData.score}
                </Text>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Education;
