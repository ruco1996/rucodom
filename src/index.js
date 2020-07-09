/** @jsx danidom */
import "./styles.css";

function danidom(type, props, ...children) {
  return {
    type,
    props,
    children,
  };
}

const Title = ({ value }) => (
  <h1 class="title" style="font-size: 50px;" data-test="hello">
    {value}
  </h1>
);

const MyComponent = () => (
  <article id="my-article">
    <div class="header" data-header="yo">
      <Title value="dani" />
    </div>
  </article>
);

const Test = ({ value }) => (
  <article id="my-article">
    <div class="header" data-header="yo">
      <Title value={value} />
    </div>
  </article>
);

function render(node) {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  if (typeof node.type === "object") {
    return render(node.type);
  }

  if (typeof node.type === "function") {
    let props = {
      children: node.children[0],
    };
    if (node.props) {
      props = Object.assign({}, node.props, props);
    }
    return render(node.type(props));
  }

  const element = document.createElement(node.type);

  if (node.props) {
    Object.keys(node.props).forEach((key) => {
      let att = document.createAttribute(key);
      att.value = node.props[key];
      element.setAttributeNode(att);
    });
  }

  let childrens = node.children.map((children) => render(children));
  childrens.forEach((c) => element.appendChild(c));

  return element;
}

const App = (props) => {
  const { children, className } = props;
  return (
    <ul class={`${className}`}>
      <li>Hello</li>
      <li>Bye</li>
      <li>{children}</li>
      <MyComponent author="daniel" />
      <Test value="daniel" />
    </ul>
  );
};

document
  .getElementById("root")
  .appendChild(render(<App className="myList">See You</App>));
