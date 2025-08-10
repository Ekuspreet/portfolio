import React from "react";
import { playfairDisplay } from "../fonts";
import Heading from "./heading";
import Calendar from "./calendar";
import Text from "./text";
import { content } from "../content";
import Connect from "./connect";
import { Separator } from "@/components/ui/separator";
const Contact = () => {
  return (
    <section
      id="contact"
      className={`${playfairDisplay.className} relative w-11/12 mx-auto pt-12 mt-12 outline rounded-xl px-4 flex flex-col gap-12 bg-transparent overflow-hidden pb-6`}
    >
      <Heading text=".contact" />

      {/* Section 1: Links */}
      <div className="flex flex-col gap-4 items-center">
        <Text role="Heading" className="text-center">
          Connect with me
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2">
          {content.contact_links.map((connect) => (
            <Connect key={connect.label} {...connect} />
          ))}
        </div>
      </div>
      <Separator className="my-5" />

      <div className="text-center flex flex-col gap-4">
        <Text role="Heading" className="text-center mb-2">
          Schedule a meeting with me
        </Text>
        <Calendar />
      </div>
    </section>
  );
};

export default Contact;
