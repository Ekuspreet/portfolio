import Hero from "./partials/hero";
import About from "./partials/about";
import { bungee } from "./fonts";
import ScrollingQuote from "./partials/scrolling";
import { content } from "./content";
import Skills from "./partials/skills";
import { Separator } from "@/components/ui/separator";
import Projects from "./partials/projects";
import Contact from "./partials/contact";
import Footer from "./partials/footer";
export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <div className={" flex items-center overflow-hidden bg-white/50 "}>
          <div
            className={
              " text-7xl md:text-9xl font-black leading-none tracking-tight relative  text-background " +
              bungee.className
            }
          >
            <ScrollingQuote text={content.scroll_quotes} speed={300} />
          </div>
        </div>
        <About />
        <Separator className="my-10" />
        <Skills />
        <Separator className="my-10" />
        <Projects />
        <Separator className="my-10" />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
