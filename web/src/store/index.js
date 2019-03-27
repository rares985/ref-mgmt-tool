import { createBrowserHistory } from "history";
import { createStore, compose, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "../reducers/index";
import thunkMiddleware from "redux-thunk";

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunkMiddleware
        // other middleware
      )
    )
  );

  return store;
}
