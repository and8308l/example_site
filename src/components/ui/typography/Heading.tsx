import React, { PropsWithChildren } from "react";
import styles from "./typography.module.css";

export default function Heading({
  size = "med",
  children,
}: {
  size?: "sml" | "med" | "lrg";
} & PropsWithChildren) {
  return (
    <h2 className={`${styles.heading} ${styles[`heading_${size}`]} text-balance`}>{children}</h2>
  );
}
