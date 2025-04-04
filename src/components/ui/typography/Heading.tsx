import React, { createElement } from "react";
import styles from "./typography.module.css";
import { HeadingProps, TypographyProps } from "@/constants/props";

export default function Heading({ size = "med", h1, children }: HeadingProps) {
  // return (
  //   <h2
  //     className={`${styles.heading} ${styles[`heading_${size}`]} text-balance`}
  //   >
  //     {children}
  //   </h2>
  // );
  return createElement(
    h1 ? "h1" : "h2",
    {
      className: `${styles.heading} ${styles[`heading_${size}`]} text-balance`,
    },
    children
  );
}
