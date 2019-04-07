// Don't worry about bundle size, useBuiltIns options of @babel/preset-env will make sure only necessary packages will be imported
import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
