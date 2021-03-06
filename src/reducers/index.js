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

import { ARTICLE_STUBS } from '../stubs/article-stubs';
import { MATCH_STUBS } from '../stubs/match-stubs';

const initialState = {
  newsPage: {
    loading: false,
    error: null,
    articles: ARTICLE_STUBS,
  },
  loginPage: {
    logged_in: false,
    logged_user: null,
    loading: false,
    error: null,
  },
  refereesPage: {
    referees: [],
    loading: false,
    error: null,
  },
  matchesPage: {
    matches: MATCH_STUBS,
    loading: false,
    error: null,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_BEGIN:
      return {
        ...state,
        loginPage: {
          ...state.loginPage,
          loading: true,
        },
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loginPage: {
          ...state.loginPage,
          logged_in: true,
          logged_user: action.payload.logged_user,
          loading: false,
        },
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loginPage: {
          ...state.loginPage,
          loading: false,
          error: action.payload.error,
        },
      };
    case FETCH_NEWS_BEGIN:
      return {
        ...state,
        newsPage: {
          ...state.newsPage,
          loading: true,
        },
      };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        newsPage: {
          ...state.newsPage,
          loading: false,
          articles: action.payload.articles,
        },
      };
    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        newsPage: {
          ...state.newsPage,
          loading: false,
          error: action.payload.error,
        },
      };
    case FETCH_REFEREES_BEGIN:
      return {
        ...state,
        refereePage: {
          ...state.refereePage,
          loading: true,
        },
      };
    case FETCH_REFEREES_SUCCESS:
      return {
        ...state,
        refereePage: {
          ...state.refereePage,
          loading: false,
          referees: action.payload.referees,
        },
      };
    case FETCH_REFEREES_FAILURE:
      return {
        ...state,
        refereePage: {
          ...state.refereePage,
          loading: false,
          error: action.payload.error,
        },
      };
    case FETCH_MATCHES_FAILURE:
      return {
        ...state,
        matchesPage: {
          ...state.matchesPage,
          loading: false,
          error: action.payload.error,
        },
      };
    case FETCH_MATCHES_BEGIN:
      return {
        ...state,
        matchesPage: {
          ...state.matchesPage,
          loading: true,
          error: null,
        },
      };
    case FETCH_MATCHES_SUCCESS:
      return {
        ...state,
        matchesPage: {
          matches: action.payload.matches,
          loading: false,
          error: null,
        },
      };

    default:
      return state;
  }
};

export default rootReducer;
