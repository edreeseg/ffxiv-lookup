import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

import Home from './components/HomePage/Home';
import TopBar from './components/TopBar';
import Search from "./components/Search";
import CharacterPage from "./components/CharacterPage/CharacterPage";

const Container = styled.section`
  height: 100%;
`;

class App extends React.Component {
  state = {};
  render() {
    return (
      <Container>
        <TopBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/search" render={props => <Search {...props} />} />
        <Route
          path="/character/:id"
          render={props => (
            <CharacterPage {...props} data={this.state.activeCharacter} />
          )}
        />
      </Container>
    );
  }
}

export default App;
