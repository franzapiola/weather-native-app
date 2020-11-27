import axios from 'axios';

export const REQUEST_SEARCH = 'REQUEST_SEARCH';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';
export const REMOVE_CARD = 'REMOVE_CARD';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const FINISH_SEARCH = 'FINISH_SEARCH';
export const FAVS_FETCHED = 'FAVS_FETCHED';

const apiKey = 'e9b96c5a24e58ea12d6b9bf89a992b9f';

export const search = city => {
  return dispatch => {
    dispatch({
      type: REQUEST_SEARCH
    });
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`)
      .then( res => res.data)
      .then( data => dispatch({
        type: RECEIVE_SEARCH,
        payload: data 
      }))
      .then(() => dispatch({
        type: FINISH_SEARCH
      }));
  };
};

export const removeCard = index => {
  return {
    type: REMOVE_CARD,
    payload: index
  };
};

export const addFavorite = city => {
  return {
    type: ADD_FAVORITE,
    payload: city
  };
};

export const removeFavorite = city => {
  return {
    type: REMOVE_FAVORITE,
    payload: city
  };
};

//Esta funcion se ejecuta al iniciarse la app
//Llama a la API de OpenWeather una vez por cada ciudad favorita que encuentra en el state
export const getASFavs = favoriteCities => {
  return async dispatch => {
    //isFetching = true;
    dispatch({
      type: REQUEST_SEARCH
    });

    await favoriteCities.forEach(async city => {
      await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`)
        .then(res => res.data)
        .then(res => dispatch({
          type: RECEIVE_SEARCH,
          payload: res
        }))
        .catch(err => console.log(`Error al buscar '${city}':`, err));
    });

    //isFetching = false;
    dispatch({
      type: FINISH_SEARCH
    });
    //favsFetched = true;
    dispatch({
      type: FAVS_FETCHED
    });
  };
};