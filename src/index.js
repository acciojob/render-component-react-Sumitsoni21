import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createRoot } from "react-dom/Client";

function Msg() {
  return <p> I am learning React. My life is getting better. </p>;
}

// ReactDOM.render(<App />, document.getElementById("root"));
const rootElement =  doucumet.getElementById("root");
const root = createRoot(rootElement);
root.render(<Msg />);
