import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router";
import Login from "./components/Login/Login";
import Matches from "./components/Matches/Matches";
import Referees from "./components/Referees/Referees";
import News from "./components/News/News";

import configureStore, { history } from "./store/index";

const store = configureStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={News} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/matches" component={Matches} />
        <Route exact path="/referees" component={Referees} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app")
);
