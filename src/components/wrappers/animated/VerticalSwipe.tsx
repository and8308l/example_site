"use client";

import React from "react";
import Observer from "../Observer";
import { YDirection } from "@/constants/types";
import animated from "./animated.module.css";
import { handleEntry, handleExit } from "@/utils/handlers";
import { SwipeProps } from "@/constants/props";

export default function VerticalSwipe({
  speed = "med",
  delay = 0,
  children,
}: SwipeProps) {
  const handleClasses = (e: Element, d: YDirection) => {
    if (d === "top") {
      e.classList.add(animated.offset_top);
      e.classList.remove(animated.offset_bottom);
    }
    if (d === "bottom") {
      e.classList.add(animated.offset_bottom);
      e.classList.remove(animated.offset_top);
    }
  };

  return (
    <Observer
      threshold={0.5}
      onEntry={(e, d) => handleEntry(e, d, animated, handleClasses)}
      onExit={(e, d) => handleExit(e, d, animated, handleClasses)}
    >
      <div
        className={`${animated.wrapper} ${animated[`speed_${speed}`]} ${
          animated[`delay_${delay}`]
        }`}
      >
        {children}
      </div>
    </Observer>
  );
}
