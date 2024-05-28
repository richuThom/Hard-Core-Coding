import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Welcome to React World :)
 
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Welcome to React World :)"
);*/
//map filter reduce

const element = <h3>THIS IS AN ELEMENT</h3>;
const elem = (
  <h3 id="heading" tabIndex={5}>
    {element}
    Hello World
  </h3>
);
const JsxHeading = () => (
  <h3 id="heading" tabIndex={5}>
    {elem}
    Hello World
  </h3>
);
//react Functional Component
const Heading = () => (
  <div id="main">
    {JsxHeading()}
    <JsxHeading />
    <h3>Welcome to React</h3>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
