// redux/reducers/apiReducer.js
import * as types from '../types/actionTypes';

const initialState = {
  insights: [],
  loading: false,
  error: null,
};

const insightsApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_INSIGHTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_INSIGHTS_SUCCESS:
      return {
        ...state,
        loading: false,
        insights: action.payload,
        error: null,
      };
    case types.FETCH_INSIGHTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default insightsApiReducer;
