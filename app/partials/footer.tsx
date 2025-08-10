import React from "react";
import { playfairDisplay } from "../fonts";
import Heading from "./heading";
import Text from "./text";
const Footer = () => {
  return (
    <>
      <section
        id="skills"
        className={`${playfairDisplay.className} relative w-11/12 mx-auto pt-12 mt-12 outline rounded-xl px-2 flex flex-col  bg-transparent overflow-hidden pb-2 mb-5`}
      >
        <Heading text={"Thank you for viewing my portfolio"} />

        <Text
          role="Subheading"
          className="text-white/70 mt-2 text-center mb-10"
        >
          © {new Date().getFullYear()} | Ekuspreet Singh.
        </Text>
      </section>
    </>
  );
};

export default Footer;
