import React from "react";
import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import App from "../pages/App";
import Manager from "../pages/Manager";
import Biker from "../pages/Biker";
import ManagerParcelList from "../pages/ManagerParcelList";
import BikerList from "../pages/BikerList";
import BikerParcelList from "../pages/BikerParcelList";
import NotFound from "./NotFound";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path={"/"} component={App} />
        <Route exact path={"/manager/:managerUserName"} component={Manager} />
        <Route exact path="/biker/:bikerUserName" component={Biker} />
        <Route
          path="/biker/:bikerUserName/:pickupStatus"
          component={BikerParcelList}
        />
        <Route
          exact
          path="/manager/:managerUserName/:orderStatus"
          component={ManagerParcelList}
        />
        <Route
          path="/bikerList/:managerUserName/:parcelId"
          component={BikerList}
        />
        <Route path={"*"} component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
