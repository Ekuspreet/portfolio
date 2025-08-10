import React from "react";
import { playfairDisplay } from "../fonts";
import Heading from "./heading";
import Text from "./text";
import { content } from "../content";
import Project from "./project";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Launch } from "@mui/icons-material";
const Projects = () => {
  return (
    <>
      <section
        className={`${playfairDisplay.className} relative w-11/12 mx-auto pt-12 mt-12 outline rounded-xl px-2 flex flex-col  bg-transparent overflow-hidden pb-2`}
        id="projects"
      >
        <div className="md:w-2/3 w-full mx-auto ">
          <Heading text={".projects"} />
          <div className="projects flex flex-col gap-16">
            <div className="flex flex-col gap-4  rounded-xl  text-center md:text-left">
              <div>
                <Text role="Heading">{"Software Projects"}</Text>
              </div>
              <div className="grid grid-cols-1 gap-10">
                {content.projects.programming.map((project) => (
                  <Project key={project.name} project={project} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4  rounded-xl  text-center md:text-left">
              <div>
                <Text role="Heading">{"Design Projects"}</Text>
              </div>
              <div className="text-center my-4">
                <Text role="Subheading">{"Logo Design"}</Text>
              </div>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(256px,1fr))] gap-10">
                {content.projects.design.logo.map((logo) => (
                  <div
                    key={logo.name}
                    className="outline bg-black/30 rounded-xl overflow-hidden flex flex-col items-center p-2"
                  >
                    <div className="relative aspect-square w-full rounded-xl overflow-hidden outline">
                      <Image
                        src={logo.img_url}
                        alt={logo.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <Text role="Paragraph" className="p-2 text-center">
                      {logo.name}
                    </Text>
                  </div>
                ))}
              </div>
              <Separator className="my-5" />
              <div className="text-center mb-4">
                <Text role="Subheading">
                  {"Print Media Design (Magazines)"}
                </Text>
              </div>
              <div className="grid  grid-cols-[repeat(auto-fill,minmax(256px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(512px,1fr))] gap-10">
                {content.projects.design.magazine.map((magazine) => (
                  <div
                    key={magazine.name}
                    className="outline bg-black/30 rounded-xl overflow-hidden flex flex-col items-center p-2"
                  >
                    <div className="relative aspect-[210/297] w-full rounded-xl overflow-hidden outline">
                      <Image
                        src={magazine.img_url}
                        alt={magazine.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <Link href={magazine.url} className="w-full mt-2">
                      <Button
                        variant="outline"
                        size="lg"
                        className="cursor-pointer w-full"
                      >
                        <Launch /> View File
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
