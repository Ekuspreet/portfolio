import Hero from "./partials/hero";
import About from "./partials/about";
import { bungee } from "./fonts";
import ScrollingQuote from "./partials/scrolling";
import { content } from "./content";
export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <div className={" flex items-center h-32 overflow-hidden bg-white/50 "}>
          <div
            className={
              " text-[128pt] font-black leading-tight tracking-tight relative -top-[0.25px] text-background " +
              bungee.className
            }
          >
            <ScrollingQuote text={content.scroll_quotes} speed={300} />
          </div>
        </div>
        <About />
      </div>
    </>
  );
}
