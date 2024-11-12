import type { ComponentProps, ElementType, ReactNode } from "react";

const PDefaultAsType = "p" as const;
type PDefaultAsType = typeof PDefaultAsType;

type PDefaultProps<E extends ElementType> = {
  fit?: boolean;
  children: ReactNode;
  as?: E;
};

type Props<E extends ElementType> = PDefaultProps<E> &
  Omit<ComponentProps<E>, keyof PDefaultProps<E>>;

export const Text = <E extends ElementType = PDefaultAsType>({
  children,
  fit = false,
  as,
  ...rest
}: Props<E>) => {
  const Tag = as || PDefaultAsType;
  const className = `${rest.className ? rest.className : ""}${
    fit ? " r-fit-text" : ""
  }`.trim();

  const props = {
    ...rest,
    className,
  };

  return <Tag {...props}>{children}</Tag>;
};
