import React from "react";
import s from "./Text.module.css";
import cn from "clsx";

const Text = ({ variant, children }) => {
  const componentsMap = {
    heading: "h1",
    subHeading: "p",
    sectionHeading: "h2",
    subSectionHeading: "p",
  };

  const Component = componentsMap[variant];

  return (
    <Component
      className={cn(s.root, {
        [s.heading]: variant === "heading",
        [s.subHeading]: variant === "subHeading",
        [s.sectionHeading]: variant === "sectionHeading",
        [s.subSectionHeading]: variant === "subSectionHeading",
      })}
    >
      {children}
    </Component>
  );
};

export default Text;
