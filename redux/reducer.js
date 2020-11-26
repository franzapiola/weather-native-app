const initialState = {
  isFetching: false,
  list: [],
  favorites: []
};

export default (state = initialState, action) => {
  const { type } = action;
  switch(type){
    case 'REQUEST_SEARCH':
      return {
        ...state,
        isFetching: true
      };
    default:
      return state;
  }
};