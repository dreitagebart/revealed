import type { ComponentProps, FC } from "react";

type Props = { lazySrc?: string } & ComponentProps<"audio">;

export const Audio: FC<Props> = ({ lazySrc, autoPlay, ...rest }) => {
  return <audio data-src={lazySrc} data-autoplay={autoPlay} {...rest} />;
};
