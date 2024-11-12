import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/night.css";
import "reveal.js/plugin/highlight/zenburn.css";
import {
  Code,
  Fragment,
  Image,
  Link,
  Note,
  Presentation,
  Slide,
  SlideAnimation,
  Text,
} from "@dreitagebart/revealed";

export const App = () => {
  return (
    <Presentation
      options={{
        controls: true,
        controlsTutorial: true,
        // view: "scroll",
        // scrollProgress: true,
      }}
    >
      <SlideAnimation id="test-group">
        <h1>Group A</h1>
        <>
          <h1 style={{ color: "#3B82F6" }}>Group A</h1>
          <Link to="slide1">Go to slide 1</Link>
        </>
      </SlideAnimation>
      <Slide hidden>
        <Fragment effect="fadeLeft">Hello</Fragment>
        <Fragment effect={["fadeUp", "strike", "highlightRed"]}>world</Fragment>
      </Slide>
      <Slide id="slide1" transition={{ in: "convex", out: "zoom" }}>
        <Text as="h2">Slide 1</Text>
        <Image
          stretch
          src="https://iconstore.co/assets/img/set/cover/simple-icons-featured.png"
          alt=""
        />
        <Note>Shhh, these are your private notes 📝</Note>
      </Slide>
      <Slide transition="zoom">
        <Code lineStartFrom={4}>
          {`
          <div>
            <a href="https://dreitagebart.io">Link</a>
          </div>`}
        </Code>
        <Link to="0">Back</Link>
      </Slide>
      <Slide>
        <Slide>Vertical 1</Slide>
        <Slide>Vertical 2</Slide>
        <Slide>Vertical 3</Slide>
        <Slide>Vertical 4</Slide>
      </Slide>
      <Slide
        background={{ color: "aquamarine" }}
        hook="green-slide"
        onHook={() => console.log("green-slide")}
      >
        Slide 3
      </Slide>
    </Presentation>
  );
};
