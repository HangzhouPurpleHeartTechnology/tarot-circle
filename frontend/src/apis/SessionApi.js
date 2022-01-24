import axios from 'axios';

export const setAuthToken = (token) => {
  if (token) axios.defaults.headers.common['Authorization'] = token;
  else delete axios.defaults.headers.common['Authorization'];
};

export const apiSignupUser = (user) => {
  console.log(user);
  return axios.post(`/api/v1/users/signup`, user);
};
export const apiSigninUser = (user) => axios.post(`/api/v1/users/signin`, user);
export const apiFetchUser = (userId) => axios.get(`/api/v1/users/${userId}`);
