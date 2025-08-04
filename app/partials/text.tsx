import React, { JSX } from "react";
const typography = {
  Display: "text-3xl md:text-5xl font-semibold leading-tight",
  Heading: "text-xl md:text-3xl font-medium leading-snug",
  Subheading: "text-base md:text-xl font-medium",
  Hero: "text-4xl md:text-6xl font-semibold leading-tight tracking-tight",
  Title: "text-lg md:text-2xl font-medium",
  Paragraph: "text-base md:text-lg font-normal",
  Small: "text-sm md:text-base font-normal",
  Tiny: "text-xs font-normal",
  Footnote: "text-[11px] font-light",
  Label: "text-sm font-medium",
  Code: "text-sm font-mono font-normal",
  Stat: "text-2xl md:text-4xl font-semibold",
} as const;

type Role = keyof typeof typography;

const Text = ({
  role,
  children,
  className = "",
  as: Component = "span",
}: {
  role: Role;
  children?: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) => {
  const style = typography[role] ?? typography["Paragraph"];
  return <Component className={`${style} ${className}`}>{children}</Component>;
};

export default Text;
