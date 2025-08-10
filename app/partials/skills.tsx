import React from "react";
import { content } from "../content";
import { playfairDisplay } from "../fonts";
import Text from "./text";
import Skill from "./skill";
import Heading from "./heading";
const Skills = () => {
  return (
    <div>
      <section
        id="skills"
        className={`${playfairDisplay.className} relative w-11/12 mx-auto pt-12 mt-12 outline rounded-xl px-2 flex flex-col  bg-transparent overflow-hidden pb-2 `}
      >
        <div className="md:w-2/3 w-full mx-auto ">
          <Heading text={".skills"} />
          <div className="skills flex flex-col gap-16">
            {content.skills.map((category) => (
              <div
                key={category.category}
                className="flex flex-col gap-4  rounded-xl  text-center md:text-left"
              >
                <div>
                  <Text role="Heading" className=" ">
                    {category.category}
                  </Text>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
                  {category.skills.map((skill) => (
                    <Skill
                      key={skill.name}
                      icon={skill.icon}
                      name={skill.name}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
