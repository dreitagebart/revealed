import { type FC, type PropsWithChildren, cloneElement } from "react";

// fade-out	Start visible, fade out
// fade-up	Slide up while fading in
// fade-down	Slide down while fading in
// fade-left	Slide left while fading in
// fade-right	Slide right while fading in
// fade-in-then-out	Fades in, then out on the next step
// current-visible	Fades in, then out on the next step
// fade-in-then-semi-out	Fades in, then to 50% on the next step
// grow	Scale up
// semi-fade-out	Fade out to 50%
// shrink	Scale down
// strike	Strike through
// highlight-red	Turn text red
// highlight-green	Turn text green
// highlight-blue	Turn text blue
// highlight-current-red	Turn text red, then back to original on next step
// highlight-current-green	Turn text green, then back to original on next step
// highlight-current-blue	Turn text blue, then back to original on next step

const EffectMap = {
  fadeOut: "fade-out",
  fadeUp: "fade-up",
  fadeDown: "fade-down",
  fadeLeft: "fade-left",
  fadeRight: "fade-right",
  fadeInOut: "fade-in-then-out",
  currentVisible: "current-visible",
  fadeInSemiOut: "fade-in-then-semi-out",
  grow: "grow",
  semiFadeOut: "semi-fade-out",
  shrink: "shrink",
  strike: "strike",
  highlightRed: "highlight-red",
  highlightGreen: "highlight-green",
  highlightBlue: "highlight-blue",
  highlightCurrentRed: "highlight-current-red",
  highlightCurrentGreen: "highlight-current-green",
  highlightCurrentBlue: "highlight-current-blue",
};

type FragmentEffects = keyof typeof EffectMap;

type Props = {
  effect: FragmentEffects | Array<FragmentEffects>;
} & PropsWithChildren;

export const Fragment: FC<Props> = ({ children, effect }) => {
  if (typeof effect === "string") {
    return <p className={`fragment ${EffectMap[effect]}`}>{children}</p>;
  }

  const effects = [...effect];
  effects.shift();
  effects.reverse();

  return (
    <p className={`fragment ${EffectMap[effect[0]]}`}>
      {effects.reduce((acc, eff, index) => {
        const effectName = EffectMap[eff];
        const accumulated = cloneElement(acc, {
          children: index === effects.length - 1 ? children : undefined,
        });

        return (
          <span key={eff} className={`fragment ${effectName}`}>
            {accumulated}
          </span>
        );
      }, <span />)}
    </p>
  );
};
