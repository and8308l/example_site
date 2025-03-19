import { YDirection } from "@/constants/types";
import React, {
  Children,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useLayoutEffect,
  useRef,
} from "react";

interface ObservableProps extends PropsWithChildren {
  threshold: number;
  onEntry: (e: Element, d: YDirection) => void;
  onExit: (e: Element, d: YDirection) => void;
}

export default function Observer({
  threshold,
  onEntry,
  onExit,
  children,
}: ObservableProps) {
  const item = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          let dir = undefined;
          if (entry.boundingClientRect.y > 0) {
            dir = "bottom";
          } else {
            dir = "top";
          }

          if (entry.isIntersecting) {
            onEntry(entry.target, dir as YDirection);
          } else {
            onExit(entry.target, dir as YDirection);
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: "-60px 100% 0px 100%",
      }
    );

    if (item.current) {
      observer.observe(item.current);
    }
  }, []);

  return Children.map<ReactNode, ReactNode>(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as ReactElement<any>, { ref: item });
    }
    return child;
  });
}
