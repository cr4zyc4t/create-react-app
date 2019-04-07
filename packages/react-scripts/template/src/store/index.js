import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { isProd } from "../utils";

import rootReducer from "./reducers";

const composeEnhancers = isProd() ? compose : (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
    ),
  ),
);

export default store;