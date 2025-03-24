"use client";

import React from "react";
import animated from "./animated.module.css";
import { YDirection } from "@/constants/types";
import { handleEntry, handleExit } from "@/utils/handlers";
import { HorzontalSwipeProps } from "@/constants/props";
import Observer from "../listeners/Observer";

export default function HorizontalSwipe({
  animation = 1,
  speed = "med",
  delay = 0,
  children,
}: HorzontalSwipeProps) {
  const handleClasses = (e: Element, d: YDirection) => {
    if (
      animation === 1 ||
      (animation === 2 && d === "bottom") ||
      (animation === 4 && d === "top")
    ) {
      e.classList.add(animated.offset_left);
      e.classList.remove(animated.offset_right);
    }
    if (
      animation === 3 ||
      (animation === 2 && d === "top") ||
      (animation === 4 && d === "bottom")
    ) {
      e.classList.add(animated.offset_right);
      e.classList.remove(animated.offset_left);
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

//
