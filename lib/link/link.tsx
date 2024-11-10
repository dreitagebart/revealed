import type { FC, PropsWithChildren } from "react";

type Props = {
  to: string | number | Array<number>;
} & PropsWithChildren;

export const Link: FC<Props> = ({ children, to }) => {
  return <a href={`/#/${Array.isArray(to) ? to.join("/") : to}`}>{children}</a>;
};
