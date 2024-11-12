import { type FC, type PropsWithChildren, useEffect, useRef } from "react";
import Reveal from "reveal.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm";
import RevealNotes from "reveal.js/plugin/notes/notes.esm";
import RevealSearch from "reveal.js/plugin/search/search.esm";
import RevealZoom from "reveal.js/plugin/zoom/zoom.esm";
import { RevealedContext } from "../use-revealed";

type Props = Partial<{
  options: Partial<Reveal.Options>;
}> &
  PropsWithChildren;

const defaultOptions: Reveal.Options = {
  controls: true,
  controlsTutorial: true,
  controlsLayout: "bottom-right",
  controlsBackArrows: "faded",
  progress: true,
  slideNumber: false,
  showSlideNumber: "all",
  hashOneBasedIndex: false,
  hash: false,
  respondToHashChanges: true,
  // jumpToSlide: true,
  history: false,
  keyboard: true,
  keyboardCondition: null,
  disableLayout: false,
  overview: true,
  center: true,
  touch: true,
  loop: false,
  rtl: false,
  navigationMode: "default",
  shuffle: false,
  fragments: true,
  fragmentInURL: true,
  embedded: false,
  help: true,
  pause: true,
  showNotes: false,
  autoPlayMedia: null,
  preloadIframes: null,
  autoAnimate: true,
  autoAnimateMatcher: null,
  autoAnimateEasing: "ease",
  autoAnimateDuration: 1.0,
  autoAnimateUnmatched: true,
  autoAnimateStyles: [
    "opacity",
    "color",
    "background-color",
    "padding",
    "font-size",
    "line-height",
    "letter-spacing",
    "border-width",
    "border-color",
    "border-radius",
    "outline",
    "outline-offset",
  ],
  autoSlide: 0,
  autoSlideStoppable: true,
  autoSlideMethod: null,
  defaultTiming: null,
  mouseWheel: false,
  previewLinks: false,
  postMessage: true,
  postMessageEvents: false,
  focusBodyOnPageVisibilityChange: true,
  transition: "slide", // none/fade/slide/convex/concave/zoom
  transitionSpeed: "default", // default/fast/slow
  backgroundTransition: "fade", // none/fade/slide/convex/concave/zoom
  pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,
  pdfSeparateFragments: true,
  pdfPageHeightOffset: -1,
  viewDistance: 3,
  mobileViewDistance: 2,
  display: "block",
  hideInactiveCursor: true,
  hideCursorTime: 5000,
};

export const Presentation: FC<Props> = ({
  children,
  options = defaultOptions,
}) => {
  const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
  const deckRef = useRef<Reveal.Api | null>(null); // reference to deck reveal instance

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return;

    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    deckRef.current = new Reveal(deckDivRef.current!, options);

    deckRef.current
      .initialize({
        plugins: [RevealHighlight, RevealNotes, RevealZoom, RevealSearch],
      })
      .then(() => {
        // nothing to do here now
      });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.", e);
      }
    };
  }, [options]);

  return (
    <RevealedContext.Provider value={deckRef.current}>
      <div className="reveal" ref={deckDivRef}>
        <div className="slides">{children}</div>
      </div>
    </RevealedContext.Provider>
  );
};
