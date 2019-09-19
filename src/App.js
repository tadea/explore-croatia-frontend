import React from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser.js";
import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Logout from "./components/Logout.js";
import Signup from "./components/Signup.js";
import FavBeaches from "./components/FavBeaches.js";
import NewBeachForm from "./components/NewBeachForm.js";
//import MainContainer from "./components/MainContainer.js";
import { Route, Switch, withRouter } from "react-router-dom";

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    const { loggedIn } = this.props;
    return (
      <div>
        {loggedIn ? <Logout /> : null}
        <Route
          exact
          path="/signup"
          render={({ history }) => <Signup history={history} />}
        />
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/"
          render={props =>
            loggedIn ? <FavBeaches {...props} /> : <Home {...props} />
          }
        />
        <Route exact path="/beaches" component={FavBeaches} />
        <Route exact path="/beaches/new" component={NewBeachForm} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getCurrentUser }
  )(App)
);
