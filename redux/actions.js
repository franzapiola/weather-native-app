import axios from 'axios';

export const REQUEST_SEARCH = 'REQUEST_SEARCH';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

const apiKey = 'e9b96c5a24e58ea12d6b9bf89a992b9f';

export const search = city => {
  return dispatch => {
    dispatch({
      type: REQUEST_SEARCH
    });
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then( res => res.data)
    //   .then( data => {
    //     console.log(data);
    //     return data;
    //   })
      .then( data => dispatch({
        type: RECEIVE_SEARCH,
        payload: data 
      }));
  };
};