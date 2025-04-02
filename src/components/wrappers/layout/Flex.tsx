import React from "react";
import styles from "./section.module.css";
import { FlexProps } from "@/constants/props";

export default function Flex({
  direction,
  justify = "start",
  align = "start",
  className,
  children,
}: FlexProps) {
  return (
    <div className={`w-screen ${styles.wrapper}`}>
      <div
        className={`flex flex-${direction} ${
          (justify == "start" && "justify-start") ||
          (justify == "center" && "justify-center") ||
          (justify == "end" && "justify-end") ||
          (justify == "between" && "justify-between") ||
          (justify == "around" && "justify-around") ||
          (justify == "evenly" && "justify-evenly")
        } ${
          (align == "start" && "items-start") ||
          (align == "center" && "items-center") ||
          (align == "end" && "items-end")
        } ${styles.limit_width} ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
