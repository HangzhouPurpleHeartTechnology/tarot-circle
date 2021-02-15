import { REMOVE_SESSION_USER } from '../actions/SessionActions';
export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case REMOVE_SESSION_USER:
      localStorage.removeItem('jwtToken');
      return { isAuthenticated: false, user: null };
    default:
      return oldState;
  }
};
