import Image from "next/image";
import Section from "./partials/section";
import Hero from "./partials/hero";
import About from "./partials/about";
export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <About />
      </div>
    </>
  );
}
