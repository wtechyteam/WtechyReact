// redux/reducers/index.js
import { combineReducers } from 'redux';
import careersReducer from './careersReducer';
import insightsApiReducer from './insightsReducer';

const rootReducer = combineReducers({
  api: careersReducer,
  insightsApi: insightsApiReducer,
});

export default rootReducer;
