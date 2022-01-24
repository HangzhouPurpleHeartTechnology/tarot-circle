import { combineReducers } from 'redux';
import entities from './EntitiesReducer';
import session from './SessionReducer';
import ui from './UiReducer';
import birthCharts from './BirthChartsReducer';

export default combineReducers({
  entities,
  session,
  ui,
  birthCharts,
});
