import React from "react";
import { connect } from "react-redux";
import Login from "./Login.js";
import Logout from "./Logout.js";

const NavBar = ({ currentUser }) => {
  return (
    <div>
      {currentUser ? `Welcome, ${currentUser.attributes.name}` : ""}
      <button>Login</button>OR
      <button>Logout</button>
    </div>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  };
};

export default connect(mapStateToProps)(NavBar);
