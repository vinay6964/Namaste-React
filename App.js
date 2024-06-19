// var h1 = document.createElement('h1');
// h1.textContent = 'H1 element By Js.';
// document.body.appendChild(h1);

/*
<div id = "parent">
<div id = "child">
<h1>I am Child </h1>
</div>
</div>
*/

import React from "react";
import ReactDOM from "react-dom/client";

let parentElement = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am Child"),
    React.createElement("h1", {}, "I am Child's brother"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am Child"),
    React.createElement("h1", {}, "I am Child's brother"),
  ]),
]);
console.log("🚀 ~ parentElement:", parentElement);

let h1Element = React.createElement(
  "h1",
  { id: "heading", name: "vinay" },
  "H1 element By React"
);
console.log("🚀 ~ h1Element:", h1Element); // At the end of the day each react element is an object.

let root = ReactDOM.createRoot(document.getElementById("rootss"));

// In the root.render we are passing a js object or an object, which converts the object it into a h1 tag (here in this case) and put it in the DOM.

root.render(parentElement);
// root.render(h1Element);

// JSX (It is not the part of React, just the convention to write html and js together.)
// JSX (It is not html in Javascript. It is html/XML like syntax)
// JSX is just a syntax
// this is how we create h1 tag <h1>This is JSX Heading</h1> inside react.


