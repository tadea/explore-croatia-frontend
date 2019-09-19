// synchronous actions
export const setFavBeaches = beaches => {
  return {
    type: "SET_FAV_BEACHES",
    beaches
  };
};

export const addBeach = beach => {
  return {
    type: "ADD_BEACH",
    beach
  };
};

// asynchronous actions
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

export const createBeach = (beachData, history) => {
  return dispatch => {
    const sendableBeachData = {
      name: beachData.name,
      location: beachData.location,
      beachType: beachData.beachType,
      user_id: beachData.userId
    };
    return fetch("http://localhost:3001/api/v1/beaches", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableBeachData)
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error);
        } else {
          dispatch(addBeach(resp.data));
        }
      })
      .catch(console.log);
  };
};
