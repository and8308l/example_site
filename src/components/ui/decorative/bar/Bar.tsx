"use client";
import ScrollListener from "@/components/wrappers/ScrollListener";
import React, { useState } from "react";
import styles from "./bar.module.css";

export default function Bar({
  direction,
}: {
  direction: "horizontal" | "vertical";
}) {
  const [percentage, setPercentage] = useState(0);

  return (
    <ScrollListener onScroll={setPercentage} start={0.3} end={0.3}>
      <div className={`${styles.wrapper} ${styles[direction]}`}>
        <div className={styles.bar}></div>
        <div
          className={styles.bar}
          style={{
            clipPath: `inset(0% 0% ${
              direction == "vertical" ? `calc(${percentage} * 100%)` : "0%"
            } ${
              direction == "horizontal" ? `calc(${percentage} * 100%)` : "0%"
            })`,
          }}
        ></div>
      </div>
    </ScrollListener>
  );
}
