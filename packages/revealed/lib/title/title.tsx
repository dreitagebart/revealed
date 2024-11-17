import type { ComponentProps, FC, ReactNode } from "react";

import { Text, type TextProps } from "../text";

type Props = {
  order?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
} & ComponentProps<"h1"> &
  TextProps<"h1">;

export const Title: FC<Props> = ({ order = 1, children, ...rest }) => {
  return (
    <Text as={`h${order}`} {...rest}>
      {children}
    </Text>
  );
};
