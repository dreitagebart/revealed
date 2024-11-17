import type { FC } from "react";

type Props = {
  children: string;
};

export const Markdown: FC<Props> = ({ children }) => {
  return (
    <section data-markdown="">
      <textarea data-template="" defaultValue={children} />
    </section>
  );
};
