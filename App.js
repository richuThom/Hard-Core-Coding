import React from "react";
import ReactDOM from "react-dom/client";
/**
 * <div id="parent">
 *  <div id="child1">
 *  <h1>Im an h1 tag</h1>
 *  <h2>Im an h2 tag</h2>
 *  </div>
 * <div id="child2">
 *  <h1>Im an h1 tag</h1>
 *  <h2>Im an h2 tag</h2>
 *  </div>
 * </div>
 * 
 */
const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child1"},
[React.createElement("h1",{},"Im an h1 tag"),React.createElement("h2",{},"Im an h2 tag")]
),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"Im an h1 tag"),React.createElement("h2",{},"Im an h2 tag")]
)
);
const heading =React.createElement("h1",{id : "abc"},"Hello World from REACT!");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
//console.log(root);
root.render(parent);