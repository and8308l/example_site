"use client";

import React, { PropsWithChildren, useRef } from "react";
import Observer from "./Observer";

interface ScrollListenerProps extends PropsWithChildren {
  start: number;
  end: number;
  onScroll: (n: number) => void;
}

export default function ScrollListener({
  start,
  end,
  onScroll,
  children,
}: ScrollListenerProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    console.log(window.scrollY);
    
    // get the dimensions of the ref element
    const offsetTop = ref.current?.offsetTop || 0;
    const offsetHeight = ref.current?.offsetHeight || 0;
    const offsetMid = offsetTop + (offsetTop + offsetHeight - offsetTop) / 2;
    // get the dimensions of the selected view region
    const scrollTop = window.scrollY + window.innerHeight * end;
    const scrollBottom =
      window.scrollY + window.innerHeight - window.innerHeight * start;
    //   calculate the progress of the element mid point through the slected view region as value of 0-1
    const progress = 1 - (offsetMid - scrollTop) / (scrollBottom - scrollTop);
    if (progress > 1) {
      onScroll(1);
    } else if (progress < 0) {
      onScroll(0);
    } else {
      onScroll(progress);
    }
  };

  const startListener = () => {
    window.addEventListener("scroll", handleScroll, false);
  };

  const stopListener = () => {
    window.removeEventListener("scroll", handleScroll, false);
  };

  return (
    <div ref={ref}>
      <Observer threshold={0.1} onEntry={startListener} onExit={stopListener}>
        {children}
      </Observer>
    </div>
  );
}
