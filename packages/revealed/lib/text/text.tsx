import clsx from "clsx";
import type { ComponentProps, ElementType, ReactNode } from "react";

type ComponentDefaultAsType = typeof ComponentDefaultAsType;

type ComponentDefaultProps<E extends ElementType> = {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strike?: boolean;
  fit?: boolean;
  children: ReactNode;
  as?: E;
};

export type TextProps<E extends ElementType> = ComponentDefaultProps<E> &
  Omit<ComponentProps<E>, keyof ComponentDefaultProps<E>>;

const ComponentDefaultAsType = "p" as const;

export const Text = <E extends ElementType = ComponentDefaultAsType>({
  children,
  bold = false,
  italic = false,
  underline = false,
  strike = false,
  fit = false,
  as,
  ...rest
}: TextProps<E>) => {
  const Tag = as || ComponentDefaultAsType;
  const className = clsx(
    { "r-fit-text": fit },
    {
      [rest.className]: Boolean(rest.className),
    }
  );
  const props = {
    ...rest,
    className,
  };
  const style = {
    ...rest.style,
    fontStyle: italic ? "italic" : undefined,
    fontWeight: bold ? "bold" : undefined,
    textDecoration: underline
      ? "underline"
      : strike
      ? "line-through"
      : undefined,
  };

  return (
    <Tag {...props} style={style}>
      {children}
    </Tag>
  );
};
