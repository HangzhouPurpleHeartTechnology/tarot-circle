import { REMOVE_SESSION_USER, RECEIVE_SESSION_USER } from '../actions/SessionActions';
const sessionReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SESSION_USER:
      return { isAuthenticated: true, user: action.payload };
    case REMOVE_SESSION_USER:
      localStorage.removeItem('jwtToken');
      return { isAuthenticated: false, user: null };
    default:
      return oldState;
  }
};

export default sessionReducer;
