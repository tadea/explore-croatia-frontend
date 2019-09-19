const initialState = {
  name: "",
  location: "",
  beachType: "",
  summary: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_BEACH_FORM":
      const returnValue = {
        ...state,
        [action.formData.name]: action.formData.value
      };
      console.log("return value is", returnValue);
      return {
        ...state,
        [action.formData.name]: action.formData.value
      };
    case "RESET_NEW_BEACH_FORM":
      return initialState;
    default:
      return state;
  }
};
