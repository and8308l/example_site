"use client";
import React, { useState } from "react";
import styles from "./bar.module.css";
import ScrollListener from "@/components/wrappers/listeners/ScrollListener";
import { Axis } from "@/constants/types";

export default function Bar({ axis }: { axis: Axis }) {
  const [progress, setProgress] = useState(0);

  return (
    <ScrollListener onScroll={setProgress} start={0.3} end={0.3}>
      <div className={`${styles.wrapper} ${styles[axis]}`}>
        <div className={styles.bar}></div>
        <div
          className={styles.bar}
          style={{
            ["--progress" as string]: progress,
          }}
        ></div>
      </div>
    </ScrollListener>
  );
}
