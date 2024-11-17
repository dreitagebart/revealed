import type { CSSProperties, FC, PropsWithChildren } from "react";

type Props = Partial<{
  id: string;
  // hook: string;
  // onHook: () => void;
  hidden: boolean;
  uncounted: boolean;
  background: Partial<{
    repeat: CSSProperties["backgroundRepeat"];
    position: CSSProperties["backgroundPosition"];
    size: CSSProperties["backgroundSize"];
    image: CSSProperties["backgroundImage"];
    color: CSSProperties["backgroundColor"];
    gradient: string;
    opacity: number;
    video: Partial<{
      url: string;
      loop: boolean;
      muted: boolean;
    }>;
    iframe: Partial<{
      url: string;
      interactive: boolean;
    }>;
  }>;
  transition:
    | "none"
    | "fade"
    | "slide"
    | "convex"
    | "concave"
    | "zoom"
    | Partial<{
        in: "fade" | "slide" | "convex" | "concave" | "zoom";
        out: "fade" | "slide" | "convex" | "concave" | "zoom";
      }>;
}> &
  PropsWithChildren;

export const Slide: FC<Props> = ({
  children,
  transition,
  background,
  hidden,
  uncounted,
  // hook,
  // onHook,
  id,
}) => {
  // const revealed = useRevealed();

  // useEffect(() => {
  //   if (hook) {
  //     debugger;
  //     revealed?.on(hook, () => {
  //       debugger;
  //       if (onHook) {
  //         onHook();
  //       }
  //     });
  //   }
  // }, [hook, revealed, onHook]);

  return (
    <section
      id={id}
      data-transition={
        typeof transition === "object"
          ? `${transition.in ? `${transition.in}-in` : undefined} ${
              transition.out ? `${transition.out}-out` : undefined
            }`
          : transition
      }
      // data-state={hook}
      data-visibility={hidden ? "hidden" : uncounted ? "uncounted" : undefined}
      data-background-video={background?.video?.url}
      data-background-video-loop={background?.video?.loop}
      data-background-video-muted={background?.video?.muted}
      data-background-opacity={background?.opacity}
      data-background-size={background?.size}
      data-background-position={background?.position}
      data-background-repeat={background?.repeat}
      data-background-image={background?.image}
      data-background-gradient={background?.gradient}
      data-background-color={background?.color}
      data-background-iframe={background?.iframe?.url}
      data-background-interactive={background?.iframe?.interactive}
    >
      {children}
    </section>
  );
};
