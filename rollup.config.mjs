// rollup.config.mjs
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/main.ts",
  output: [
    {
      dir: "dist/cjs",
      format: "cjs",
    },
    {
      dir: "dist/esm",
      format: "es",
    },
    {
      dir: "dist/iife",
      name: "rollupTest",
      format: "iife",
    },
    {
      dir: "dist/system",
      format: "system",
    },
  ],
  plugins: [json(), terser(), typescript()],
};
