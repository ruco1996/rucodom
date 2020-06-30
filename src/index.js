/** @jsx d */
import "./styles.css";

const root = document.getElementById("root");

function d(type, props, ...children) {
  return {
    type,
    props,
    children,
  };
}
const title = <h1>hello world</h1>;

function render(node) {
  const element = document.createElement(node.type);
  return element;
}

root.appendChild(render(title));
