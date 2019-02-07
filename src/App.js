import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { loadSavedCharacter } from "./redux/actions";
import Home from "./components/HomePage/Home";
import TopBar from "./components/TopBar";
import Search from "./components/Search";
import Login from "./components/Login";
import CharacterPage from "./components/CharacterPage/CharacterPage";

class App extends React.Component {
  componentDidMount() {
    this.props.loadSavedCharacter();
  }
  render() {
    return (
      <>
        <TopBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/search" render={props => <Search {...props} />} />
        <Route
          exact
          path="/character"
          render={props => <CharacterPage {...props} saved />}
        />
        <Route
          path="/character/:id"
          render={props => <CharacterPage {...props} />}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    savedCharacter: state.savedCharacter
  };
};

export default connect(
  mapStateToProps,
  { loadSavedCharacter },
  null,
  { pure: false }
)(App); // Must be formatted this way due to interaction between shouldComponentUpdate on connect HOC and router.
