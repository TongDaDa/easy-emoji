const { join } = require("path");
import { uglify } from "rollup-plugin-uglify";
import jsonParser from "rollup-plugin-json";
import css from 'rollup-plugin-css-only'
const rollupTypescript = require('@rollup/plugin-typescript');

export default {
  input: `./src/index.ts`,
  watch: true,
  output: {
    // name: "index.js",
    file: "./dist/index.js",
    format: "cjs",
    sourcemap: true
  },
  inlineDynamicImports: true,
  plugins: [
      rollupTypescript(),
	  css(),
      jsonParser(),
      // uglify()
  ]
};

