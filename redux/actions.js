// import axios from 'axios';

export const search = () => {
  return dispatch => {
    dispatch({
      type: 'REQUEST_SEARCH'
    });
  };
};