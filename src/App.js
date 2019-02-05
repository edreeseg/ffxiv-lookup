import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { connect } from 'react-redux';

import { loadSavedCharacter } from './redux/actions';
import Home from "./components/HomePage/Home";
import TopBar from "./components/TopBar";
import Search from "./components/Search";
import CharacterPage from "./components/CharacterPage/CharacterPage";
import MyCharacterPage from "./components/CharacterPage/MyCharacterPage";

const Container = styled.section`
  height: 100%;
`;

class App extends React.Component {
  componentDidMount(){
    this.props.loadSavedCharacter();
  }
  render() {
    return (
      <Container>
        <TopBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/search" render={props => <Search {...props} />} />
        <Route exact path="/character" component={MyCharacterPage} />
        <Route
          path="/character/:id"
          render={props => (
            <CharacterPage {...props} />
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    savedCharacter: state.savedCharacter,
  };
}

export default connect(mapStateToProps, { loadSavedCharacter }, null, { pure: false })(App); // Must be formatted this way due to interaction between shouldComponentUpdate on connect HOC and router.
