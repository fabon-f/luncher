/* eslint-env browser */
const { ipcRenderer } = require("electron");
import { render, h, Component } from "preact";
import App from "./app";
import Store from "./store";

const preventDrop = e => {
  e.preventDefault();
  return false;
};
document.addEventListener("drop", preventDrop);
document.addEventListener("dragover", preventDrop);

const store = new Store({
  directory: null
});

const dispatch = store.emit.bind(store);

ipcRenderer.on("game-directory", (_e, directory) => {
  store.update(state => {
    state.directory = directory;
    return state;
  });
});

store.on("game-directory", () => {
  ipcRenderer.send("game-directory");
});

class AppContainer extends Component {
  render() {
    const state = store.getState();
    return h(App, { state, dispatch });
  }
  componentDidMount() {
    store.on("update", () => this.forceUpdate());
  }
}

render(h(AppContainer), document.getElementById("app"));
