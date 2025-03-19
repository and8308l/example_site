import React, { PropsWithChildren } from "react";
import styles from "./section.module.css";

export default function Flex({
  direction = "row",
  children,
}: { direction: "col" | "row" } & PropsWithChildren) {
  return (
    <div className={`w-screen ${styles.wrapper}`}>
      <div className={`flex flex-${direction} ${styles.limit_width}`}>
        {children}
      </div>
    </div>
  );
}
