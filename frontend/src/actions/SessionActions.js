import * as Api from '../apis/SessionApi';
import { receiveUser } from './UsersAction.js';

export const RECEIVE_SESSION_USER = 'RECEIVE_SESSION_USER';
export const REMOVE_SESSION_USER = 'REMOVE_SESSION_USER';
export const RECEIVE_SESSION_ERROR = 'RECEIVE_SESSION_ERROR';
export const RECEIVE_USER_ERROR = 'RECEIVE_USER_ERROR';

const receiveSessionUser = (user) => ({
  type: RECEIVE_SESSION_USER,
  payload: user,
});

const removeSessionUser = () => ({
  type: REMOVE_SESSION_USER,
});

const receiveSessionError = (error) => ({
  type: RECEIVE_SESSION_ERROR,
  payload: error,
});

const receiveUserError = (error) => ({
  type: RECEIVE_USER_ERROR,
  payload: error,
});

export const actionSignin = (user) => (dispatch) =>
  Api.apiSigninUser(user)
    .then((usr) => dispatch(receiveSessionUser(usr)))
    .catch((err) => dispatch(receiveSessionError(err.response.data)));

export const actionSignup = (user) => (dispatch) =>
  Api.apiSignupUser(user)
    .then((usr) => dispatch(receiveSessionUser(usr)))
    .catch((err) => dispatch(receiveSessionError(err.response.data)));

export const actionSignout = () => (dispatch) =>
  dispatch(removeSessionUser()).catch((err) =>
    dispatch(receiveSessionError(err.response.data))
  );

export const actionFetchUser = (userId) => (dispatch) =>
  Api.apiFetchUser(userId)
    .then((res) => dispatch(receiveUser(res)))
    .catch((err) => dispatch(receiveUserError(err.response.data)));
