/** @jsx h */

import { h } from "preact";
import Landing from "./landing";
import Launcher from "./launcher";

const App = ({ state, dispatch }) => state.directory ? <Launcher/> : <Landing dispatch={dispatch} />;

export default App;
