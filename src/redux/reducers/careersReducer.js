// redux/reducers/apiReducer.js
import * as types from '../types/actionTypes';

const initialState = {
  careers: [],
  loading: false,
  error: null,
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CAREERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_CAREERS_SUCCESS:
      return {
        ...state,
        loading: false,
        careers: action.payload,
        error: null,
      };
    case types.FETCH_CAREERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default apiReducer;
