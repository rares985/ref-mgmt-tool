import axios from 'axios';

import {
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  FETCH_NEWS_BEGIN,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
  FETCH_REFEREES_BEGIN,
  FETCH_REFEREES_SUCCESS,
  FETCH_REFEREES_FAILURE,
  FETCH_MATCHES_BEGIN,
  FETCH_MATCHES_SUCCESS,
  FETCH_MATCHES_FAILURE,
} from '../constants/action-types';

const LoginUserBegin = () => ({
  type: LOGIN_USER_BEGIN,
});

const LoginUserSuccess = () => ({
  type: LOGIN_USER_SUCCESS,
});

const LoginUserFailure = (error) => ({
  type: LOGIN_USER_FAILURE,
  payload: {
    error,
  },
});

export const LoginUser = (request) => {
  const url = 'localhost:3001/api/login';
  return (dispatch) => {
    dispatch(LoginUserBegin());
    console.log(request);
    axios
      .get(url, request)
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        dispatch(LoginUserSuccess());
        console.log('Dispatched login_user_success');
      })
      .catch((err) => {
        dispatch(LoginUserFailure(err.error));
        console.log('Dispatched login_user_err');
      });
  };
};

const FetchNewsBegin = () => ({
  type: FETCH_NEWS_BEGIN,
});

const FetchNewsSuccess = (articles) => ({
  type: FETCH_NEWS_SUCCESS,
  payload: {
    articles,
  },
});

const FetchNewsFailure = (error) => ({
  type: FETCH_NEWS_FAILURE,
  payload: {
    error,
  },
});

export const FetchNews = (request) => {
  const url = 'localhost:3001/api/news';
  return (dispatch) => {
    dispatch(FetchNewsBegin());
    axios
      .get(url, request)
      .then((res) => {
        dispatch(FetchNewsSuccess(res.articles));
      })
      .catch((err) => {
        dispatch(FetchNewsFailure(err.error));
      });
  };
};

const FetchRefereesBegin = () => ({
  type: FETCH_REFEREES_BEGIN,
});

const FetchRefereesSuccess = (referees) => ({
  type: FETCH_REFEREES_SUCCESS,
  payload: {
    referees,
  },
});

const FetchRefereesFailure = (error) => ({
  type: FETCH_REFEREES_FAILURE,
  payload: {
    error,
  },
});

export const FetchReferees = (request) => {
  const url = 'localhost:3001/api/referees';
  return (dispatch) => {
    dispatch(FetchRefereesBegin());
    axios
      .get(url, request)
      .then((res) => {
        dispatch(FetchRefereesSuccess(res.referees));
      })
      .catch((err) => {
        dispatch(FetchRefereesFailure(err.error));
      });
  };
};

const FetchMatchesBegin = () => ({
  type: FETCH_MATCHES_BEGIN,
});

const FetchMatchesSuccess = (matches) => ({
  type: FETCH_MATCHES_SUCCESS,
  payload: {
    matches,
  },
});

const FetchMatchesFailure = (error) => ({
  type: FETCH_MATCHES_FAILURE,
  payload: {
    error,
  },
});

export const FetchMatches = (request) => {
  const url = 'localhost:3001/api/matches';
  return (dispatch) => {
    dispatch(FetchMatchesBegin());
    axios
      .get(url, request)
      .then((res) => {
        dispatch(FetchMatchesSuccess(res.matches));
      })
      .catch((err) => {
        dispatch(FetchMatchesFailure(err.error));
      });
  };
};
