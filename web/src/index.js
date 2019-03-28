import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router";
import configureStore, { history } from "./store/index";

import "bootstrap/dist/css/bootstrap.min.css";

import News from "./components/News/News";
import Login from "./components/Login/Login";
import Matches from "./components/Matches/Matches";
import Referees from "./components/Referees/Referees";
import NotFound from "./components/NotFound/NotFound";

const store = configureStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={News} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/matches" component={Matches} />
        <Route exact path="/referees" component={Referees} />
        <Route path="*" component={NotFound} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app")
);
