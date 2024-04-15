// redux/reducers/index.js
import { combineReducers } from 'redux';
import careersReducer from './careersReducer';

const rootReducer = combineReducers({
  api: careersReducer,
});

export default rootReducer;
