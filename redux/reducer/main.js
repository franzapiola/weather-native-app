import { REQUEST_SEARCH, RECEIVE_SEARCH, REMOVE_CARD, FINISH_SEARCH, FAVS_FETCHED } from '../actions';

const initialState = {
  isFetching: false,
  favsFetched: false,
  list: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch(type){
    case REQUEST_SEARCH:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_SEARCH:
      if(state.list.some( city => city.id === payload.id)){
        return {
          ...state,
          isFetching: false
        };
      }
      return {
        ...state,
        list: [...state.list.slice(), payload]
      };
    case FINISH_SEARCH:
      return {
        ...state,
        isFetching: false
      };
    case REMOVE_CARD:
      return {
        ...state,
        list: state.list.filter((curr, index) => index != payload)
      };
    case FAVS_FETCHED:
      return {
        ...state,
        favsFetched: true
      };
    default:
      return state;
  }
};