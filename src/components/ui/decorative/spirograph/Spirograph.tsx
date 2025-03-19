"use client";

import ScrollListener from "@/components/wrappers/ScrollListener";
import React, { useState } from "react";

export default function Spirograph({
  amount,
  size,
  animationOverlap,
}: {
  amount: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  size: number;
  animationOverlap: 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
}) {
  const length = 1 / amount;
  const offset = animationOverlap - length;
  const startPoints = linspace(0, 1 - length - offset, amount);
  const endPoints = linspace(0 + length + offset, 1, amount);
  const [percentage, setPercentage] = useState(0);
  const fraction = 0.5;

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
    <ScrollListener onScroll={setPercentage} start={0.1} end={0.25}>
      <div style={{ width: size, height: size, position: "relative" }}>
        {Array.from({ length: amount }, (_, i) => (
          <div
            key={i}
            style={{
              width: size * fraction,
              height: size * fraction,
              left: `${(100 - 100 * fraction) / 2}%`,
              border: "2px solid green",
              borderRadius: "50%",
              position: "absolute",
              transform: `rotate(${(360 / amount) * i}deg)`,
              transformOrigin: "bottom",
              opacity: calcProgress(startPoints[i], endPoints[i], percentage),
            }}
          ></div>
        ))}
      </div>
    </ScrollListener>
  );
}
