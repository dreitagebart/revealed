import "reveal.js/dist/reveal.css";
import {
  type FC,
  type PropsWithChildren,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Reveal from "reveal.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm";
import RevealNotes from "reveal.js/plugin/notes/notes.esm";
import RevealSearch from "reveal.js/plugin/search/search.esm";
import RevealZoom from "reveal.js/plugin/zoom/zoom.esm";

import { RevealedContext } from "../use-revealed";

type Props = Partial<{
  theme?: (typeof themes)[number];
  options: Partial<Reveal.Options>;
}> &
  PropsWithChildren;

const themes = [
  "black",
  "white",
  "league",
  "beige",
  "sky",
  "night",
  "serif",
  "simple",
  "solarized",
  "blood",
  "moon",
  "night",
  "none",
] as const;

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
  theme = "black",
  options = defaultOptions,
}) => {
  const revealDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
  const revealRef = useRef<Reveal.Api | null>(null); // reference to deck reveal instance
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    if (revealRef.current?.isReady()) {
      console.log("adjust layout...");
      revealRef.current.layout();
    }
  });

  useEffect(() => {
    if (revealRef.current) return;

    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    revealRef.current = new Reveal(revealDivRef.current!, options);

    revealRef.current
      .initialize({
        plugins: [
          RevealHighlight,
          RevealMarkdown,
          RevealNotes,
          RevealZoom,
          RevealSearch,
        ],
      })
      .then(() => {
        setVisible(true);
        // nothing to do here now
      });

    return () => {
      try {
        if (revealRef.current) {
          revealRef.current.destroy();
          revealRef.current = null;
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.", e);
      }
    };
  }, [options]);

  return (
    <HelmetProvider>
      <RevealedContext.Provider value={revealRef.current}>
        <Helmet>
          {theme !== "none" && themes.includes(theme) ? (
            <link
              rel="stylesheet"
              href={`../../node_modules/reveal.js/dist/theme/${theme}.css`}
            />
          ) : null}
        </Helmet>
        <div
          className="reveal"
          style={{
            height: "100vh",
          }}
          ref={revealDivRef}
        >
          <div
            className="slides"
            style={{
              transition: "opacity 600ms ease-in-out",
              opacity: visible ? 1 : 0,
            }}
          >
            {children}
          </div>
        </div>
      </RevealedContext.Provider>
    </HelmetProvider>
  );
};
