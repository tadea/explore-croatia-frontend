import React from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser.js";
import NavBar from "./components/NavBar.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Logout from "./components/Logout.js";
import FavBeaches from "./components/FavBeaches.js";
//import MainContainer from "./components/MainContainer.js";
import { Route } from "react-router-dom";

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/fav-beaches" component={FavBeaches} />
      </div>
    );
  }
}

export default connect(
  null,
  { getCurrentUser }
)(App);
