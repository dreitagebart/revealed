import clsx from "clsx";
import {
  type ComponentProps,
  type ElementType,
  type ReactNode,
  cloneElement,
} from "react";

type ComponentDefaultAsType = typeof ComponentDefaultAsType;

type ComponentDefaultProps<E extends ElementType> = {
  effect?: FragmentEffects | Array<FragmentEffects>;
  as?: E;
  children: ReactNode;
};

type Props<E extends ElementType> = ComponentDefaultProps<E> &
  Omit<ComponentProps<E>, keyof ComponentDefaultProps<E>>;

const ComponentDefaultAsType = "div" as const;

const EffectMap = {
  fadeIn: "fade-in",
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

// type Props = {
//   as?:
//   effect?: FragmentEffects | Array<FragmentEffects>;
// } & PropsWithChildren;

export const Fragment = <E extends ElementType = ComponentDefaultAsType>({
  as,
  effect = "fadeIn",
  children,
  ...rest
}: Props<E>) => {
  const Tag = as || ComponentDefaultAsType;

  if (typeof effect === "string") {
    return (
      <Tag
        className={clsx("fragment", EffectMap[effect], {
          [rest.className]: Boolean(rest.className),
        })}
      >
        {children}
      </Tag>
    );
  }

  const effects = [...effect];
  effects.shift();
  effects.reverse();

  return (
    <Tag
      className={clsx("fragment", EffectMap[effect[0]], {
        [rest.className]: Boolean(rest.className),
      })}
    >
      {effects.reduce((acc, eff, index) => {
        const effectName = EffectMap[eff];
        const accumulated = cloneElement(acc, {
          children: index === effects.length - 1 ? children : undefined,
        });

        return (
          <span key={eff} className={clsx("fragment", effectName)}>
            {accumulated}
          </span>
        );
      }, <span />)}
    </Tag>
  );
};
