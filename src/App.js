/** @jsx rucodom */
import { rucodom } from "./helpers/rucodom.js";
import Title from "./components/Title.js";

const App = (props) => {
  const { children, className } = props;
  return (
    <ul class={`${className}`}>
      <li>Hello</li>
      <li>Bye</li>
      <li>{children}</li>
      <Title value="yeee" />
    </ul>
  );
};

export default App;
