import { REQUEST_SEARCH, RECEIVE_SEARCH, REMOVE_CARD } from './actions';

const initialState = {
  isFetching: false,
  list: [],
  favorites: ['Buenos Aires']
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
        isFetching: false,
        list: [...state.list.slice(), payload]
      };
    case REMOVE_CARD:
      return {
        ...state,
        list: state.list.filter((curr, index) => index != payload)
      };
    default:
      return state;
  }
};