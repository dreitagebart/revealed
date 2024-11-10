import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/league.css";
import { Fragment, Link, Presentation, Slide } from "@dreitagebart/revealed";

export const App = () => {
  return (
    <Presentation options={{ controls: true, controlsTutorial: true }}>
      <Slide>
        <Fragment effect="fadeLeft">Hello</Fragment>
        <Fragment effect={["fadeUp", "strike", "highlightRed"]}>world</Fragment>
      </Slide>
      <Slide transition={{ in: "convex", out: "zoom" }}>Slide 1</Slide>
      <Slide transition="zoom" hook="make-it-pop">
        <p>Slide 2</p>
        <Link to="0">Back</Link>
      </Slide>
      <Slide>
        <Slide>Vertical 1</Slide>
        <Slide>Vertical 2</Slide>
        <Slide>Vertical 3</Slide>
        <Slide>Vertical 4</Slide>
      </Slide>
      <Slide background={{ color: "aquamarine" }}>Slide 3</Slide>
    </Presentation>
  );
};
