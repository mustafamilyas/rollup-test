// rollup.config.mjs
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import pkg from "./package.json" assert { type: "json" };

export default {
  input: "src/main.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],
  plugins: [json(), terser()],
};
