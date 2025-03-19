export type YDirection = "top" | "bottom" | undefined;
export type XDirection = "left" | "right" | undefined;
export type TransitionSpeed = "med" | "fast" | "x_fast";
export type TransitionDelay = 0 | 1 | 2 | 3 | 4 | 5;
export type CSSModule = {
  readonly [key: string]: string;
};
export type AnimationCallback = (e: Element, d: YDirection) => void;
