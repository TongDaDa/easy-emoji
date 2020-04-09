const { join } = require("path");
import { uglify } from "rollup-plugin-uglify";
import path from "path";
import jsonParser from "rollup-plugin-json";
import copy from 'rollup-plugin-copy';
import commonjs from 'rollup-plugin-commonjs';
// import css from 'rollup-plugin-css-only';
const rollupTypescript = require('@rollup/plugin-typescript');

export default {
  input: `./src/index.ts`,
  watch: true,
  preserveModules: true,
  output: {
    // name: "index.js",
	dir: "./dist",
    // file: "./dist/test/index.js",
    format: "cjs",
    sourcemap: true
  },
  // inlineDynamicImports: true,
  plugins: [
      rollupTypescript(),
	  copy({
		  targets: [
			  {
			  	src: path.join(__dirname, "src", "assets"),
				dest: path.join(__dirname, "dist")
			  }
		  ]
	  }),
      jsonParser()
      // uglify()
  ]
};

