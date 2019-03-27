import {
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} from "../constants/action-types";

import axios from "axios";

const LoginUserBegin = () => ({
  type: LOGIN_USER_BEGIN
});

const LoginUserSuccess = () => ({
  type: LOGIN_USER_SUCCESS
});

const LoginUserFailure = error => ({
  type: LOGIN_USER_FAILURE,
  payload: {
    error
  }
});

export const LoginUser = request => {
  let url = "localhost:3001/api/login";
  return dispatch => {
    dispatch(LoginUserBegin());
    console.log("Dispatched login_user_begin");
    axios
      .get(url, request)
      .then(res => {
        dispatch(LoginUserSuccess());
        console.log("Dispatched login_user_success");
      })
      .catch(err => {
        dispatch(LoginUserFailure(err.error));
        console.log("Dispatched login_user_err");
      });
  };
};
