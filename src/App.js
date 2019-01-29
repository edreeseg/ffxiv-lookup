import React from "react";
import styled from "styled-components";

import Home from "./components/Home";

const Container = styled.div`
  height: 100%;
  position: relative;
`;

class App extends React.Component {
  render() {
    return (
      <Container>
        <Home />
      </Container>
    );
  }
}

export default App;
