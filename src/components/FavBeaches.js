import React from "react";
import BeachCard from "./BeachCard.js";
import { connect } from "react-redux";

const FavBeaches = props => {
  const BeachCards =
    props.beaches.length > 0
      ? props.beaches.map(b => <BeachCard beach={b} key={b.id} />)
      : null;
  return BeachCards;
};

const mapStateToProps = state => {
  return {
    beaches: state.favBeaches
  };
};

export default connect(mapStateToProps)(FavBeaches);
