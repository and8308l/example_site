import React from "react";
import styles from "./section.module.css";
import { GridProps } from "@/constants/props";

export default function Grid({
  columns,
  justify = "start",
  align = "start",
  children,
}: GridProps) {
  return (
    <div className={`w-screen ${styles.wrapper}`}>
      <div
        className={`w-screen ${styles.layout} grid ${styles.grid}  ${
          (justify == "start" && "justify-items-start") ||
          (justify == "center" && "justify-items-center") ||
          (justify == "end" && "justify-items-end") ||
          ""
        } ${
          (align == "start" && "items-start") ||
          (align == "center" && "items-center") ||
          (align == "end" && "items-end") ||
          ""
        } ${styles.limit_width}`}
        style={{ ["--columns" as string]: columns }}
      >
        {children}
      </div>
    </div>
  );
}
