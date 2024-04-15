// redux/actions/apiActions.js
import * as types from '../types/actionTypes';

export const fetchCareersRequest = () => ({
  type: types.FETCH_CAREERS_REQUEST,
});

export const fetchCareersSuccess = (data) => ({
  type: types.FETCH_CAREERS_SUCCESS,
  payload: data,
});

export const fetchCareersFailure = (error) => ({
  type: types.FETCH_CAREERS_FAILURE,
  payload: error,
});

export const fetchCareers = () => {
  return async (dispatch) => {
    dispatch(fetchCareersRequest());
    try {
      const response = await fetch('https://wordpress-1079908-3850878.cloudwaysapps.com/wp-json/wp/v2/career');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      dispatch(fetchCareersSuccess(data));
    } catch (error) {
      dispatch(fetchCareersFailure(error.message));
    }
  };
};
