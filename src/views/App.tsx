// import "reveal.js/dist/reveal.css";
// import "reveal.js/dist/theme/night.css";

import {
  Code,
  Fragment,
  Iframe,
  Image,
  Link,
  Markdown,
  NavigationLink,
  Note,
  Presentation,
  Slide,
  SlideAnimation,
  Text,
  Title,
} from "@dreitagebart/revealed";

export const App = () => {
  return (
    <Presentation theme="league">
      <SlideAnimation id="test-group">
        <>
          <Iframe
            className="r-stretch"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/O0175evT7Wo?si=deeeQYS2qcOQ_KHA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <NavigationLink direction="left">Back</NavigationLink>
          <NavigationLink
            onClick={() => alert("hello")}
            style={{ border: "1px solid red", fontSize: 40 }}
            direction="next"
          >
            Next
          </NavigationLink>
          <Title>Group A</Title>
        </>
        <>
          <Text as="h1" style={{ color: "#3B82F6" }}>
            Group A
          </Text>
          <Link to="slide1">Go to slide 1</Link>
        </>
      </SlideAnimation>
      <Markdown>{`
      # Slide in Markdown
      ---
      # Next slide in markdown`}</Markdown>
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
        // hook="green-slide"
        // onHook={() => console.log("green-slide")}
      >
        Slide 3
      </Slide>
    </Presentation>
  );
};
