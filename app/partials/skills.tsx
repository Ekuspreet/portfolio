import React from "react";
import { content } from "../content";
import Image from "next/image";
import { playfairDisplay } from "../fonts";
import Text from "./text";
const Skills = () => {
  return (
    <div>
      <section
        id="skills"
        className={`${playfairDisplay.className} relative w-11/12 mx-auto pt-12 mt-12 px-4 flex flex-col  bg-transparent overflow-hidden`}
      >
        <div className="relative z-10 text-center mb-4">
          <Text role="Hero">.skills </Text>
        </div>
        <div className="skills flex flex-col gap-10">
          {content.skills.map((category) => (
            <div key={category.category} className="flex flex-col gap-4">
              <div className="text-center md:text-left">
                <Text role="Heading" className=" ">
                  {category.category}
                </Text>
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-start md:items-start gap-4 text-white/90">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex outline p-2 rounded-xl bg-white/30 flex-col items-center justify-center"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={80}
                      height={80}
                      className=" p-3 w-full  h-20 rounded-xl inline-block "
                    />
                    <Text role="Paragraph" className="text-center mt-2">
                      {skill.name}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
