"use client";
import React from "react";
import Image from "next/image";
import Text from "./text";
import Github from "@mui/icons-material/GitHub";
import Launch from "@mui/icons-material/Launch";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { outfit } from "../fonts";
import { Separator } from "@/components/ui/separator";
type ProjectProps = {
  name: string;
  description: string;
  github: string;
  link?: string | null;
  img_url: string;
  work_in_progress: boolean;
  technologies: string[];
};

const Project = ({ project }: { project: ProjectProps }) => {
  return (
    <div className="outline rounded-xl p-4 flex flex-col gap-4 ">
      {project.work_in_progress && <Text role="Small">* Work in Progress</Text>}
      <Text role="Heading" className="mb-3 text-center">
        {project.name}
      </Text>
      {/* Image Section */}
      <div className="relative w-full aspect-[24/9]">
        <Image
          src={project.img_url}
          alt={project.name}
          fill
          className="object-cover bg-white/30  object-top outline rounded-xl"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between  text-justify">
        {/* Top: Title, Description, Tags */}
        <div className="flex flex-col gap-2">
          <Text role="Paragraph" className=" mb-3 text-white/70 leading-snug">
            {project.description}
          </Text>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <Text
                key={index}
                role="Small"
                className="outline px-3 py-1 rounded-xl"
              >
                {tech}
              </Text>
            ))}
          </div>
        </div>
        <Separator className="my-5" />
        {/* Bottom: Buttons */}

        <div className={`flex gap-2  ${outfit.className}`}>
          {project.github && (
            <Link href={project.github} className="flex-1">
              <Button
                variant="outline"
                size="lg"
                className="cursor-pointer w-full "
              >
                <Github /> GitHub
              </Button>
            </Link>
          )}
          {project.link && (
            <Link href={project.link} className="flex-1">
              <Button
                variant="outline"
                size="lg"
                className="cursor-pointer w-full "
              >
                <Launch /> Live Demo
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Project;
