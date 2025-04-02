import { TypographyProps } from "@/constants/props";
import React from "react";
import styles from "./typography.module.css";

export default function BodyCopy({ size = "med", children, ...initProps }: TypographyProps) {
  return (
    <p
      className={`${styles.body_copy} ${
        styles[`body_copy_${size}`]
      } text-pretty `}
    >
      {children}
    </p>
  );
}
