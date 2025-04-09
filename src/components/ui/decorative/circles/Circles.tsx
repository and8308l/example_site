"use client";

import React, { useState } from "react";
import styles from "./circles.module.css";
import ScrollListener from "@/components/wrappers/listeners/ScrollListener";
import { calcProgress, linspace } from "@/utils/calc";

// Props in this component have been written within the file as they are only here for temporary demonstration purposes
interface CirclesProps {
  amount: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  animationOverlap: 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
}

export default function Circles({ amount, animationOverlap }: CirclesProps) {
  const [progress, setProgress] = useState<number>(0);
  const length = 1 / amount;
  const offset = animationOverlap - length;

  return (
    <ScrollListener onScroll={setProgress} start={0.15} end={0.5}>
      <div className={styles.wrapper}>
        {Array.from({ length: amount }).map((_, i) => {
          return (
            <div
              key={i}
              className={styles.circle}
              style={{
                ["--child" as string]: i * 1 + 1,
                ["--progress" as string]: calcProgress(
                  linspace(0, 1 - length - offset, amount)[i],
                  linspace(0 + length + offset, 1, amount)[i],
                  progress
                ),
              }}
            ></div>
          );
        })}
      </div>
    </ScrollListener>
  );
}
