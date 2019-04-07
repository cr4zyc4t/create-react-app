import { isProd } from "./utils";

declare global {
  interface Window {
    __REACT_DEVTOOLS_GLOBAL_HOOK__: any;
  }
}

// Disable React devtool
if (isProd() && typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === "object") {
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () { };
}

// Polyfill
