import type { FC } from "react";

type Props = Partial<{
  lineStartFrom: number;
  withLineNumbers: boolean;
}> & { children: string };

export const Code: FC<Props> = ({
  // withLineNumbers,
  lineStartFrom,
  children,
}) => {
  return (
    <pre>
      <code
        data-noescape
        data-trim
        data-line-numbers
        data-ln-start-from={lineStartFrom}
      >
        {children}
      </code>
    </pre>
  );
};
