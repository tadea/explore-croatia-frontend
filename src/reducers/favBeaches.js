export default (state = [], action) => {
  switch (action.type) {
    case "SET_FAV_BEACHES":
      return action.beaches;
    default:
      return state;
  }
};
