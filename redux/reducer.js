const initialState = {
  isFetching: false,
  list: [],
  favorites: []
};

export default (state = initialState, action) => {
  const { type } = action;
  switch(type){
    default:
      return state;
  }
};