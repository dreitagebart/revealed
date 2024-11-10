import { type FC, type PropsWithChildren, useEffect, useRef } from "react";
import Reveal from "reveal.js";

// type Options = {
//   // Display presentation control arrows
//   controls: boolean;

//   // Help the user learn the controls by providing hints, for example by
//   // bouncing the down arrow when they first encounter a vertical slide
//   controlsTutorial: boolean;

//   // Determines where controls appear, "edges" or "bottom-right"
//   controlsLayout: "edges" | "bottom-right";

//   // Visibility rule for backwards navigation arrows; "faded", "hidden"
//   // or "visible"
//   controlsBackArrows: "faded" | "hidden" | "visible";

//   // Display a presentation progress bar
//   progress: boolean;

//   // Display the page number of the current slide
//   // - true:    Show slide number
//   // - false:   Hide slide number
//   //
//   // Can optionally be set as a string that specifies the number formatting:
//   // - "h.v":   Horizontal . vertical slide number (default)
//   // - "h/v":   Horizontal / vertical slide number
//   // - "c":   Flattened slide number
//   // - "c/t":   Flattened slide number / total slides
//   //
//   // Alternatively, you can provide a function that returns the slide
//   // number for the current slide. The function should take in a slide
//   // object and return an array with one string [slideNumber] or
//   // three strings [n1,delimiter,n2]. See #formatSlideNumber().
//   slideNumber: boolean | "h.v" | "h/v" | "c" | "c/t";

//   // Can be used to limit the contexts in which the slide number appears
//   // - "all":      Always show the slide number
//   // - "print":    Only when printing to PDF
//   // - "speaker":  Only in the speaker view
//   showSlideNumber: "all" | "print" | "speaker";

//   // Use 1 based indexing for # links to match slide number (default is zero
//   // based)
//   hashOneBasedIndex: boolean;

//   // Add the current slide number to the URL hash so that reloading the
//   // page/copying the URL will return you to the same slide
//   hash: boolean;

//   // Flags if we should monitor the hash and change slides accordingly
//   respondToHashChanges: boolean;

//   // Enable support for jump-to-slide navigation shortcuts
//   jumpToSlide: boolean;

//   // Push each slide change to the browser history.  Implies `hash: true`
//   history: boolean;

//   // Enable keyboard shortcuts for navigation
//   keyboard: boolean;

//   // Optional function that blocks keyboard events when returning false
//   //
//   // If you set this to 'focused', we will only capture keyboard events
//   // for embedded decks when they are in focus
//   keyboardCondition: null;

//   // Disables the default reveal.js slide layout (scaling and centering)
//   // so that you can use custom CSS layout
//   disableLayout: boolean;

//   // Enable the slide overview mode
//   overview: boolean;

//   // Vertical centering of slides
//   center: boolean;

//   // Enables touch navigation on devices with touch input
//   touch: boolean;

//   // Loop the presentation
//   loop: boolean;

//   // Change the presentation direction to be RTL
//   rtl: boolean;

//   // Changes the behavior of our navigation directions.
//   //
//   // "default"
//   // Left/right arrow keys step between horizontal slides, up/down
//   // arrow keys step between vertical slides. Space key steps through
//   // all slides (both horizontal and vertical).
//   //
//   // "linear"
//   // Removes the up/down arrows. Left/right arrows step through all
//   // slides (both horizontal and vertical).
//   //
//   // "grid"
//   // When this is enabled, stepping left/right from a vertical stack
//   // to an adjacent vertical stack will land you at the same vertical
//   // index.
//   //
//   // Consider a deck with six slides ordered in two vertical stacks:
//   // 1.1    2.1
//   // 1.2    2.2
//   // 1.3    2.3
//   //
//   // If you're on slide 1.3 and navigate right, you will normally move
//   // from 1.3 -> 2.1. If "grid" is used, the same navigation takes you
//   // from 1.3 -> 2.3.
//   navigationMode: "default" | "linear" | "grid";

//   // Randomizes the order of slides each time the presentation loads
//   shuffle: boolean;

//   // Turns fragments on and off globally
//   fragments: boolean;

//   // Flags whether to include the current fragment in the URL,
//   // so that reloading brings you to the same fragment position
//   fragmentInURL: boolean;

//   // Flags if the presentation is running in an embedded mode,
//   // i.e. contained within a limited portion of the screen
//   embedded: boolean;

//   // Flags if we should show a help overlay when the question-mark
//   // key is pressed
//   help: boolean;

//   // Flags if it should be possible to pause the presentation (blackout)
//   pause: boolean;

//   // Flags if speaker notes should be visible to all viewers
//   showNotes: boolean;

//   // Global override for autolaying embedded media (video/audio/iframe)
//   // - null:   Media will only autoplay if data-autoplay is present
//   // - true:   All media will autoplay, regardless of individual setting
//   // - false:  No media will autoplay, regardless of individual setting
//   autoPlayMedia: boolean | null;

//   // Global override for preloading lazy-loaded iframes
//   // - null:   Iframes with data-src AND data-preload will be loaded when within
//   //           the viewDistance, iframes with only data-src will be loaded when visible
//   // - true:   All iframes with data-src will be loaded when within the viewDistance
//   // - false:  All iframes with data-src will be loaded only when visible
//   preloadIframes: boolean | null;

//   // Can be used to globally disable auto-animation
//   autoAnimate: boolean;

//   // Optionally provide a custom element matcher that will be
//   // used to dictate which elements we can animate between.
//   autoAnimateMatcher: null;

//   // Default settings for our auto-animate transitions, can be
//   // overridden per-slide or per-element via data arguments
//   autoAnimateEasing: CSSProperties["transitionTimingFunction"];
//   autoAnimateDuration: number;
//   autoAnimateUnmatched: boolean;

//   // CSS properties that can be auto-animated. Position & scale
//   // is matched separately so there's no need to include styles
//   // like top/right/bottom/left, width/height or margin.
//   autoAnimateStyles: Array<CSSProperties["transitionProperty"]>;

//   // Controls automatic progression to the next slide
//   // - 0:      Auto-sliding only happens if the data-autoslide HTML attribute
//   //           is present on the current slide or fragment
//   // - 1+:     All slides will progress automatically at the given interval
//   // - false:  No auto-sliding, even if data-autoslide is present
//   autoSlide: "0" | "1+" | false;

//   // Stop auto-sliding after user input
//   autoSlideStoppable: boolean;

//   // Use this method for navigation when auto-sliding (defaults to navigateNext)
//   autoSlideMethod: null;

//   // Specify the average time in seconds that you think you will spend
//   // presenting each slide. This is used to show a pacing timer in the
//   // speaker view
//   defaultTiming: null;

//   // Enable slide navigation via mouse wheel
//   mouseWheel: boolean;

//   // Opens links in an iframe preview overlay
//   // Add `data-preview-link` and `data-preview-link="false"` to customise each link
//   // individually
//   previewLinks: boolean;

//   // Exposes the reveal.js API through window.postMessage
//   postMessage: boolean;

//   // Dispatches all reveal.js events to the parent window through postMessage
//   postMessageEvents: boolean;

//   // Focuses body when page changes visibility to ensure keyboard shortcuts work
//   focusBodyOnPageVisibilityChange: boolean;

//   // Transition style
//   transition: "none" | "fade" | "slide" | "convex" | "concave" | "zoom"; // none/fade/slide/convex/concave/zoom

//   // Transition speed
//   transitionSpeed: "default" | "fast" | "slow"; // default/fast/slow

//   // Transition style for full page slide backgrounds
//   backgroundTransition:
//     | "none"
//     | "fade"
//     | "slide"
//     | "convex"
//     | "concave"
//     | "zoom"; // none/fade/slide/convex/concave/zoom

//   // The maximum number of pages a single slide can expand onto when printing
//   // to PDF, unlimited by default
//   pdfMaxPagesPerSlide: number;

//   // Prints each fragment on a separate slide
//   pdfSeparateFragments: boolean;

//   // Offset used to reduce the height of content within exported PDF pages.
//   // This exists to account for environment differences based on how you
//   // print to PDF. CLI printing options, like phantomjs and wkpdf, can end
//   // on precisely the total height of the document whereas in-browser
//   // printing has to end one pixel before.
//   pdfPageHeightOffset: number;

//   // Number of slides away from the current that are visible
//   viewDistance: number;

//   // Number of slides away from the current that are visible on mobile
//   // devices. It is advisable to set this to a lower number than
//   // viewDistance in order to save resources.
//   mobileViewDistance: number;

//   // The display mode that will be used to show slides
//   display: CSSProperties["display"];

//   // Hide cursor if inactive
//   hideInactiveCursor: boolean;

//   // Time before the cursor is hidden (in ms)
//   hideCursorTime: number;
// };

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

    deckRef.current.initialize().then(() => {
      deckRef.current?.on("make-it-pop", () => {
        console.log("✨");
      });
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
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">{children}</div>
    </div>
  );
};
