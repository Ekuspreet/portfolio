import React from "react";
import { playfairDisplay } from "../fonts";

const Footer = () => {
  return (
    <>
      <section
        id="skills"
        className={`${playfairDisplay.className} relative w-11/12 mx-auto pt-12 mt-12 outline rounded-xl px-2 flex flex-col  bg-transparent overflow-hidden pb-2`}
      ></section>
    </>
  );
};

export default Footer;
