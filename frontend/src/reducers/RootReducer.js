import { combineReducers } from 'redux';
import entities from './EntitiesReducer';
import session from './SessionReducer';
import ui from './UiReducer';

export default combineReducers({
  entities,
  session,
  ui,
});
