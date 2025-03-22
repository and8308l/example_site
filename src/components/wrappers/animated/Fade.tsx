"use client";

import React from "react";
import animated from "./animated.module.css";
import { FadeProps } from "@/constants/props";
import Observer from "../listeners/Observer";

export default function Fade({
  speed = "med",
  delay = 0,
  onExit,
  children,
}: FadeProps) {
  return (
    <Observer
      threshold={0.5}
      onEntry={(e) => e.classList.add(animated.on_screen)}
      onExit={(e) => onExit && e.classList.remove(animated.on_screen)}
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
