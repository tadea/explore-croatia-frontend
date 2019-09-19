import React from "react";
import { updateNewBeachForm } from "../actions/newBeachForm.js";
import { createBeach } from "../actions/favBeaches.js";
import { connect } from "react-redux";

const NewBeachForm = ({
  name,
  location,
  beachType,
  summary,
  history,
  updateNewBeachForm,
  createBeach,
  userId
}) => {
  const handleChange = event => {
    console.log(" trigger handle change");
    const { name, value } = event.target;
    updateNewBeachForm(name, value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    createBeach({ ...FormData, userId });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="name"
        value={name}
        name="name"
        type="text"
        onChange={handleChange}
      />
      <input
        placeholder="location"
        value={location}
        name="location"
        type="text"
        onChange={handleChange}
      />
      <input
        placeholder="beachType"
        value={beachType}
        name="beachType"
        type="text"
        onChange={handleChange}
      />
      <input
        placeholder="summary"
        value={summary}
        name="summary"
        type="text"
        onChange={handleChange}
      />
      <input type="submit" value="Create" />
    </form>
  );
};

const mapStateToProps = state => {
  const { name, location, beachType, summary } = state.newBeachForm;
  const userId = state.currentUser ? state.currentUser.id : "";
  return {
    name,
    location,
    beachType,
    summary,
    userId
  };
};

export default connect(
  mapStateToProps,
  { updateNewBeachForm, createBeach }
)(NewBeachForm);
//video #9 on 20 min explained
