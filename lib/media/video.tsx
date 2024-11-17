import clsx from "clsx";
import type { ComponentProps, FC } from "react";

type Props = { stretch?: boolean; lazySrc?: string } & ComponentProps<"video">;

export const Video: FC<Props> = ({
  lazySrc,
  autoPlay,
  stretch = false,
  className,
  ...rest
}) => {
  const props = {
    ...rest,
    className: clsx(className, { "r-stretch": stretch }),
  };

  return <video data-src={lazySrc} data-autoplay={autoPlay} {...props} />;
};
