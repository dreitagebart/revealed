import clsx from "clsx";
import type { ComponentProps, FC } from "react";

type Props = { stretch?: boolean; lazySrc?: string } & ComponentProps<"iframe">;

export const Iframe: FC<Props> = ({
  lazySrc,
  className,
  stretch = false,
  ...rest
}) => {
  const props = {
    ...rest,
    className: clsx(className, { "r-stretch": stretch }),
  };

  return <iframe data-src={lazySrc} {...props} />;
};
