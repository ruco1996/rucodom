/** @jsx daniDom */
import "./styles.css";

const root = document.getElementById("root");

function daniDom(type, props, ...children) {
  return {
    type,
    props,
    children,
  };
}

const Title = (
  <h1 class="title" style="font-size: 50px;" data-test="hello">
    dsdasda
  </h1>
);

const MyComponent = (
  <div>
    <h1 class="title" style="font-size: 50px;" data-test="hello">
      hello world
    </h1>
  </div>
);

function render(node) {
  console.log(node);
  var element;
  if (typeof node.type == "string") {
    element = document.createElement(node.type);
    console.log(element);
  }
  if (typeof node.type == "object") {
    return render(node.type);
  }

  if (node.props) {
    Object.keys(node.props).forEach((key) => {
      let att = document.createAttribute(key);
      att.value = node.props[key];
      element.setAttributeNode(att);
    });
  }

  let text = document.createTextNode(node.children[0]);
  element.appendChild(text);
  return element;
}

// root.appendChild(render(<MyComponent hello="pim"></MyComponent>));

root.appendChild(render(<Title />));

// root.appendChild(render(title));
