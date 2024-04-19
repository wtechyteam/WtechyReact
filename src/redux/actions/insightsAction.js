// redux/actions/apiActions.js
import * as types from '../types/actionTypes';

export const fetchInsightsRequest = () => ({
  type: types.FETCH_INSIGHTS_REQUEST,
});

export const fetchInsightsSuccess = (data) => ({
  type: types.FETCH_INSIGHTS_SUCCESS,
  payload: data,
});

export const fetchInsightsFailure = (error) => ({
  type: types.FETCH_INSIGHTS_FAILURE,
  payload: error,
});

export const fetchInsights = () => {
  return async (dispatch) => {
    dispatch(fetchInsightsRequest());
    try {
      const response = await fetch('https://wordpress-1079908-3850878.cloudwaysapps.com/wp-json/wp/v2/insights');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      dispatch(fetchInsightsSuccess(data));
    } catch (error) {
      dispatch(fetchInsightsFailure(error.message));
    }
  };
};
