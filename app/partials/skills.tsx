import React from "react";
import { content } from "../content";
import Image from "next/image";
import { playfairDisplay } from "../fonts";
import Text from "./text";
import Skill from "./skill";
const Skills = () => {
  return (
    <div>
      <section
        id="skills"
        className={`${playfairDisplay.className} relative w-11/12 mx-auto pt-12 mt-12 outline rounded-xl px-2 flex flex-col  bg-transparent overflow-hidden pb-2`}
      >
        <div className="relative z-10 text-center my-8">
          <Text role="Hero">.skills </Text>
        </div>
        <div className="skills flex flex-col gap-16">
          {content.skills.map((category) => (
            <div
              key={category.category}
              className="flex flex-col gap-4  rounded-xl"
            >
              <div>
                <Text role="Heading" className=" ">
                  {category.category}
                </Text>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
                {category.skills.map((skill) => (
                  <Skill key={skill.name} icon={skill.icon} name={skill.name} />
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
