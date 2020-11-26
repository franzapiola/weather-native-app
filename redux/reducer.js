import { REQUEST_SEARCH, RECEIVE_SEARCH } from './actions';

const initialState = {
  isFetching: false,
  list: [],
  favorites: []
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
      return {
        ...state,
        isFetching: false,
        list: [...state.list.slice(), payload]
      };
    default:
      return state;
  }
};