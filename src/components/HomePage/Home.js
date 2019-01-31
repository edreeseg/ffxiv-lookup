import React from "react";
import styled from "styled-components";
import Accordion from "./Accordion";

const HomeContainer = styled.section``;

const Login = styled.span`
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 5rem;
  color: #eee;
  cursor: pointer;

  &:active {
    transform: translateY(2px);
  }
`;

class Home extends React.Component {
  render() {
    return (
      <HomeContainer>
        <Accordion />
        <Login className="fas fa-sign-in-alt" title="Login" />
      </HomeContainer>
    );
  }
}

export default Home;
