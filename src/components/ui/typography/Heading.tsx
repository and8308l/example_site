import React from "react";
import styles from "./typography.module.css";
import { TypographyProps } from "@/constants/props";

export default function Heading({ size = "med", children }: TypographyProps) {
  return (
    <h2
      className={`${styles.heading} ${styles[`heading_${size}`]} text-balance`}
    >
      {children}
    </h2>
  );
}
