import clsx from "clsx";
import type { ComponentProps, FC, ReactNode } from "react";

import { useRevealed } from "../use-revealed";

type Props = {
  direction: "left" | "right" | "up" | "down" | "prev" | "next";
  children: ReactNode;
} & ComponentProps<"button">;

export const NavigationLink: FC<Props> = ({ direction, children, ...rest }) => {
  const revealed = useRevealed();

  return (
    <button
      type="button"
      onClick={() =>
        direction === "left"
          ? revealed?.navigateLeft()
          : direction === "right"
          ? revealed?.navigateRight()
          : direction === "up"
          ? revealed?.navigateUp()
          : direction === "down"
          ? revealed?.navigateDown()
          : direction === "next"
          ? revealed?.navigateNext()
          : direction === "prev"
          ? revealed?.navigatePrev()
          : null
      }
      className={clsx({
        "navigate-left": direction === "left",
        "navigate-right": direction === "right",
        "navigate-up": direction === "up",
        "navigate-down": direction === "down",
        "navigate-prev": direction === "prev",
        "navigate-next": direction === "next",
      })}
      {...rest}
    >
      {children}
    </button>
  );
};
