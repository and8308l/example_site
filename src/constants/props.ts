import { PropsWithChildren } from "react";
import { FlexDirection, TransitionDelay, TransitionSpeed } from "./types";

// layout wrapper props
export interface LayoutProps extends PropsWithChildren {
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  align?: "start" | "center" | "end";
}

export interface GridProps extends LayoutProps {
  columns: number;
}

export interface FlexProps extends LayoutProps {
  direction: FlexDirection;
}

// animated wrapper props
export interface FadeProps extends TransitionProps {
  onExit?: boolean;
}

export interface HorzontalSwipeProps extends TransitionProps {
  animation?: 1 | 2 | 3 | 4;
}

export interface TransitionProps extends PropsWithChildren {
  speed?: TransitionSpeed;
  delay?: TransitionDelay;
}
