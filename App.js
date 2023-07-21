import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1> I am jsx </h1>;
const jsxParagraph = <p>I am a paragraph</p>;
const JsxDiv = () => (
  <div>
    <p>This is another paragraph</p>
    {jsxHeading}
    {jsxParagraph}
  </div>
);
console.log(jsxHeading);
console.log(jsxParagraph);
console.log(JsxDiv);

// React Component - It is nothing but a JavaScript Function

const HeadingComp = () => {
  return (
    <>
      {JsxDiv()}
      <h2>Another React Component</h2>;
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("root-2"));
root.render(<HeadingComp />);
root2.render(<JsxDiv />);
