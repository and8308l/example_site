import { PropsWithChildren } from "react";
import {
  AlignBasic,
  FlexDirection,
  JustifyContent,
  TransitionDelay,
  TransitionSpeed,
} from "./types";

// layout wrapper props
export interface GridProps extends PropsWithChildren {
  columns: number;
  justify?: AlignBasic;
  align?: AlignBasic;
}

export interface FlexProps extends PropsWithChildren {
  direction: FlexDirection;
  justify?: JustifyContent;
  align?: AlignBasic;
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
