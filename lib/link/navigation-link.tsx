import type { FC } from "react";

type Props = {
  direction: "left" | "right" | "up" | "down" | "prev" | "next";
};

export const NavigationLink: FC<Props> = ({ direction }) => {
  return direction === "left" ? (
    <button type="button" className="navigate-left" />
  ) : direction === "right" ? (
    <button type="button" className="navigate-right" />
  ) : direction === "up" ? (
    <button type="button" className="navigate-up" />
  ) : direction === "down" ? (
    <button type="button" className="navigate-down" />
  ) : direction === "prev" ? (
    <button type="button" className="navigate-prev" />
  ) : direction === "next" ? (
    <button type="button" className="navigate-next" />
  ) : null;
};
