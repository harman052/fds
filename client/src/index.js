import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./reducers";
import Root from "./components/Root";
import { loadState, saveState } from "./sessionStorage";

const getMockData = async () => {
  const response = await fetch("/api/getMockData");
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
};

getMockData()
  .then(res => {
    /**
     * Saving the initial state to sessionStorage so as
     * to keep the view persistent for current session.
     */
    saveState(res.data);

    // Getting state from sessionStorage to load into store
    const persistedState = loadState();

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
  })
  .catch(err => console.log(err));
