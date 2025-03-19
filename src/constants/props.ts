import { PropsWithChildren } from "react";
import { TransitionDelay, TransitionSpeed } from "./types";

export interface FadeProps extends TransitionProps {
  onExit?: boolean;
}

export interface SwipeProps extends TransitionProps {
  animation?: 1 | 2 | 3 | 4;
}

interface TransitionProps extends PropsWithChildren {
  speed?: TransitionSpeed;
  delay?: TransitionDelay;
}
