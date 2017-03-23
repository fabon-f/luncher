import commonConfig from "./rollup.config.common";

export default Object.assign({}, commonConfig, {
  entry: "src/renderer.js",
  format: "iife",
  dest: "dest/renderer.js"
});
