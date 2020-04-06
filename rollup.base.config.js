// rollup.config.js
// import resolve from 'rollup-plugin-node-resolve';
import babel from "rollup-plugin-babel";
const { join } = require("path");
import { uglify } from "rollup-plugin-uglify";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import jsonParser from "rollup-plugin-json";
import builtins from "rollup-plugin-node-builtins";

const projectName = process.env.RPOJECT_NAME;

// external ，客户端白名单模块，表示不是此工程内文件，是从客户端中引入的
const crustModulesWhiteList = ["./utils/getAppRootPath"];

export default {
  // dir: ['./app/scripts'],
  input: `./packages/${projectName}/src/index.js`,
  context: "global",
  watch: true,
  output: {
    // name: "rolldown",
    intro: "var globalThis = global; \n",
    file: "./dist/index.js",
    format: "cjs",
    sourcemap: true,
    noConflict: true
  },
  inlineDynamicImports: true,
  external: (id, parentId, isResolved) => {
    if (/^\.+/.test(id) || id.includes(`${projectName}/src`)|| /core\/.*/.test(id)) {
      // console.log(id, isResolved, "false");
      return false;
    }
    return true;
  },
  plugins: [
    resolve({
      preferBuiltins: false,
      browser: false,
      main: false
    }),
    commonjs(),
    babel({
      exclude: "node_modules/**"
    }),
    jsonParser(),
    estimate_after_exports_plugin()
    // builtins(),
    // uglify()
  ]
};


function estimate_after_exports_plugin() {
  return {
    name: 'my-example',
    writeBundle(bundle){
      // console.log(bundle, "bundle");
    },
    // It is special for resolving a situation that a relative path imported module from crust and written in the project.
    resolveId(source) {
      if (crustModulesWhiteList.some((whiteIdName) => source.includes(whiteIdName))) {
        console.log(source, "resolveId");
        return { id: source,  external: true };
      }
      return null;
    },
    generateBundle(specifier, importer, isWrite){
      // console.log(importer, importer, isWrite, "importer");
    },
    outro(source){
      console.log(source, "source");
    }
  }
}
