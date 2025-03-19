"use client";

import React, { useState } from "react";
import styles from "./circles.module.css";
import ScrollListener from "@/components/wrappers/ScrollListener";

export default function Circles({
  amount,
  animationOverlap,
}: {
  amount: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  animationOverlap: 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
}) {
  const length = 1 / amount;
  const offset = animationOverlap - length;
  const startPoints = linspace(0, 1 - length - offset, amount);
  const endPoints = linspace(0 + length + offset, 1, amount);
  const [percentage, setPercentage] = useState(0);
  const calcProgress = (start: number, end: number, progress: number) => {
    if (progress < start) {
      return 0;
    } else if (progress > end) {
      return 1;
    } else {
      return (progress - start) / (end - start);
    }
  };

  function linspace(start: number, stop: number, numPoints: number) {
    if (numPoints <= 1) {
      return [start];
    }
    const result = [];
    const step = (stop - start) / (numPoints - 1);
    for (let i = 0; i < numPoints; i++) {
      result.push(start + i * step);
    }
    return result;
  }

  return (
    <ScrollListener onScroll={setPercentage} start={0.15} end={0.5}>
      <div className={styles.wrapper}>
        {Array.from({ length: amount }).map((e, i) => {
          return (
            <div
              key={i}
              className={styles.circle}
              style={{
                ["--scale" as any]: i * 1 + 1,
                opacity: calcProgress(startPoints[i], endPoints[i], percentage),
                transform: `${
                  i != amount - 1 ? "translate(-50%, -50%)" : ""
                } scale(${
                  calcProgress(startPoints[i], endPoints[i], percentage) * 0.2 +
                  0.8
                })`,
              }}
            ></div>
          );
        })}
      </div>
    </ScrollListener>
  );
}
