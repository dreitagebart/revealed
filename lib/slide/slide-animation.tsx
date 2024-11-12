import type { FC, ReactNode } from "react";

type Props = {
  id: string;
  children: [ReactNode, ReactNode];
};

export const SlideAnimation: FC<Props> = ({ children, id }) => {
  return (
    <>
      <section data-auto-animate data-auto-animate-id={id}>
        {children[0]}
      </section>
      <section data-auto-animate data-auto-animate-id={id}>
        {children[1]}
      </section>
    </>
  );
};
