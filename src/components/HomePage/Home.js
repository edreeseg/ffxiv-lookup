import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Accordion from "./Accordion";
import Login from "./Login";

const HomeContainer = styled.section``;

const LoginButton = styled.span`
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
  state = {
    loginActive: false
  };
  render() {
    return (
      <HomeContainer>
        {this.state.loginActive ? (
          <Login />
        ) : (
          <div>
            <Accordion />
          </div>
        )}
        <LoginButton
          className={`fas ${
            this.state.loginActive ? "fa-undo-alt" : "fa-sign-in-alt"
          }`}
          title="Login"
          onClick={() =>
            this.setState(prevState => ({
              loginActive: !prevState.loginActive
            }))
          }
        />
      </HomeContainer>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(Home);
