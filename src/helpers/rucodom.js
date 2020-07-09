export function rucodom(type, props, ...children) {
  return {
    type,
    props,
    children,
  };
}

export function render(node) {
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
