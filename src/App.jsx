import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("🚀 ~ root:", root);
root.render(<App />);
