/** @jsx rucodom */
import "./styles.css";
import App from "./App.js";
import { render, rucodom } from "./helpers/rucodom";

document
  .getElementById("root")
  .appendChild(render(<App className="myList">See You</App>));
