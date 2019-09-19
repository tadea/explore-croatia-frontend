export default (state = [], action) => {
  switch (action.type) {
    case "SET_FAV_BEACHES":
      return action.beaches;
    case "ADD_BEACH":
      return state.beaches.concat(action.beaches);
    default:
      return state;
  }
};
