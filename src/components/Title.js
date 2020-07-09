/** @jsx rucodom */
import { rucodom } from "../helpers/rucodom";

const Title = ({ value }) => (
  <h1 class="title" style="font-size: 50px;" data-test="hello">
    {value}
  </h1>
);

export default Title;
