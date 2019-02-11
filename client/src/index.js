import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./reducers";
import Root from "./components/Root";
import { loadState, saveState } from "./sessionStorage";

const persistedState = loadState();
console.log("index.js");
// Passing second argument to createStore to initialize the state
const store = createStore(rootReducer, persistedState);

/**
 * Saving state to sessionStorage everytime the state updates
 * to keep the view persistent for current session. State will
 * lost if user closes current tab or browser window.
 *
 * For more real world scenarios, rather saving state on every
 * update, a throttle function (for example, _.throttle from Lodash)
 * can be used to delay save for specified amount of time.
 */
store.subscribe(() => {
  saveState(store.getState());
});

render(
  <Root store={store} subscribe={store.subscribe} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
