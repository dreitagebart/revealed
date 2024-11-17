import type { ComponentProps, FC, PropsWithChildren } from "react";

type Props = {
  to: string | number | Array<number>;
} & PropsWithChildren &
  Omit<ComponentProps<"a">, "href">;

export const Link: FC<Props> = ({ children, to, ...rest }) => {
  return (
    <a
      href={
        typeof to === "string" && to.startsWith("http")
          ? to
          : `/#/${Array.isArray(to) ? to.join("/") : to}`
      }
      {...rest}
    >
      {children}
    </a>
  );
};
