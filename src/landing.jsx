/** @jsx h */

import { h } from "preact";

const Landing = ({ dispatch }) => (
  <div>
    <button type="button" onClick={() => dispatch("game-directory")}></button>
  </div>
);

export default Landing;
