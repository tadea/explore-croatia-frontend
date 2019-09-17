import React from "react";
import { connect } from "react-redux";
import { updateSignupForm } from "../actions/signupForm.js";
import { signup } from "../actions/currentUser.js";

const Signup = ({ signupFormData, updateSignupForm, signup }) => {
  const handleInputChange = event => {
    const { name, value } = event.target;
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    };
    updateSignupForm(updatedFormInfo);
  };

  const handleSubmit = event => {
    event.preventDefault();
    signup(signupFormData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="firstname"
        value={signupFormData.firstname}
        name="firstname"
        type="text"
        onChange={handleInputChange}
      />
      <input
        placeholder="lastname"
        value={signupFormData.lastname}
        name="lastname"
        type="text"
        onChange={handleInputChange}
      />
      <input
        placeholder="name"
        value={signupFormData.name}
        name="name"
        type="text"
        onChange={handleInputChange}
      />
      <input
        placeholder="password"
        value={signupFormData.password}
        name="password"
        type="text"
        onChange={handleInputChange}
      />
      <input type="submit" value="Sign Up" />
    </form>
  );
};

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  };
};

export default connect(
  mapStateToProps,
  { updateSignupForm, signup }
)(Signup);
