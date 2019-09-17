import { resetLoginForm } from "./loginForm.js";
import { getFavBeaches } from "./favBeaches.js";
import { resetSignupForm } from "./signupForm.js";

// synchronous action creators
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  };
};

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  };
};
// asynchronous action creators
export const login = (credentials, history) => {
  console.log("credentials are", credentials);
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error);
        } else {
          dispatch(setCurrentUser(response.data));
          dispatch(getFavBeaches());
          dispatch(resetLoginForm());
          history.push("/");
        }
      })
      .catch(console.log);
  };
};

export const signup = (credentials, history) => {
  console.log("credentials are", credentials);
  return dispatch => {
    const userInfo = {
      user: credentials
    };
    return fetch("http://localhost:3001/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error);
        } else {
          dispatch(setCurrentUser(response.data));
          dispatch(getFavBeaches());
          dispatch(resetSignupForm());
          history.push("/");
        }
      })
      .catch(console.log);
  };
};

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser());
    return fetch("http://localhost:3001/api/v1/logout", {
      credentials: "include",
      method: "DELETE"
    });
  };
};

export const getCurrentUser = () => {
  console.log("Dispatching get current user");
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/get_current_user", {
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
          dispatch(setCurrentUser(response.data));
          dispatch(getFavBeaches()); //check video #5 for this!
        }
      })
      .catch(console.log);
  };
};
