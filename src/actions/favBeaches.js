export const setFavBeaches = beaches => {
  return {
    type: "SET_FAV_BEACHES",
    beaches
  };
};

export const getFavBeaches = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/beaches", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error);
        } else {
          console.log(response.data);
          dispatch(setFavBeaches(response.data));
        }
      })
      .catch(console.log);
  };
};
