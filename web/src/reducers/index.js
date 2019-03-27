import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import {
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} from "../constants/action-types";

const initialState = {
  loading: false,
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_BEGIN:
      return {
        ...state,
        loading: true
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default history =>
  combineReducers({
    router: connectRouter(history),
    rootReducer
  });
