import type { ComponentProps, FC } from "react";

type ImageDefaultProps = {
  stretch?: boolean;
  src: string;
  alt: string;
};

type Props = ImageDefaultProps &
  Omit<ComponentProps<"img">, keyof ImageDefaultProps>;

export const Image: FC<Props> = ({ src, alt, stretch, ...rest }) => {
  const className = `${rest.className ? rest.className : ""}${
    stretch ? " r-stretch" : ""
  }`.trim();
  const props = { ...rest, className };

  return <img {...props} alt={alt} src={src} />;
};
