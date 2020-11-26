import { REMOVE_FAVORITE, ADD_FAVORITE } from '../actions';

const initialState = {
  list: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch(type){
    case ADD_FAVORITE:
      return {
        list: [ ...state.list.slice(), payload]
      };
    case REMOVE_FAVORITE:
      return {
        list: state.list.filter( name => name != payload)
      };
    default:
      return state;
  }
};