const initialState = {
  name: "",
  password: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_LOGIN_FORM":
      return action.formData;
    default:
      return state;
  }
};

//video(3) on 30' min explained
