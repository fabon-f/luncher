import babel from "rollup-plugin-babel";
import nodeResolve from "rollup-plugin-node-resolve";

export default {
  plugins: [
    nodeResolve({
      jsnext: true,
      browser: false,
      extensions: [".js", ".jsx"]
    }),
    babel({
      exclude: "node_modules/**"
    })
  ],
  sourceMap: process.env.NODE_ENV !== "production"
};
