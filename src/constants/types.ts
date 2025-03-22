export type YDirection = "top" | "bottom";
export type XDirection = "left" | "right";
export type Axis = "x" | "y";
export type FlexDirection = "row" | "col";
export type TransitionSpeed = "med" | "fast" | "x_fast";
export type TransitionDelay = 0 | 1 | 2 | 3 | 4 | 5;
export type CSSModule = {
  readonly [key: string]: string;
};
export type AnimationCallback = (e: Element, d: YDirection) => void;
