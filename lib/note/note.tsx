import type { FC, PropsWithChildren } from "react";

export const Note: FC<PropsWithChildren> = ({ children }) => {
  return <aside className="notes">{children}</aside>;
};
