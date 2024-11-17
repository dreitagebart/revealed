import clsx from "clsx";
import type { ComponentProps, FC } from "react";

type Props = {
  stretch?: boolean;
} & ComponentProps<"img">;

export const Image: FC<Props> = ({ stretch, alt, ...rest }) => {
  const className = clsx(
    { [rest.className as string]: Boolean(rest.className) },
    { "r-stretch": stretch }
  );
  const props = {
    ...rest,
    className,
  };

  return <img {...props} alt={alt} />;
};
