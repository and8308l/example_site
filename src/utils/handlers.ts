import { AnimationCallback, CSSModule, YDirection } from "@/constants/types";

export const handleEntry = (
  e: Element,
  d: YDirection,
  styles: CSSModule,
  callback: AnimationCallback
) => {
  e.classList.add(styles.on_screen);
  callback(e, d);
};

export const handleExit = (
  e: Element,
  d: YDirection,
  styles: CSSModule,
  callback: AnimationCallback
) => {
  e.classList.remove(styles.on_screen);
  callback(e, d);
};
