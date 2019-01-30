import React from "react";
import styled from "styled-components";

const HomeContainer = styled.section`
  width: 90%;
  margin: 0 auto;
  background: #eee;
  height: 70%;
  border-radius: 10px;
  padding: 10px;

  .decorative {
    height: 3rem;
    width: 90%;
    margin: 0 auto;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #eee;

    &:hover {
      transform: scaleY(1.5);

      h3 {
        transform: scaleY(0.666);
        transform: scaleY(calc(2 / 3));
        font-weight: bold;
        font-size: 1.7rem;
      }
    }
  }

  .blue {
    background: #0d2c40;
  }
  .red {
    background: #f15a30;
  }
  .green {
    background: #2de0ad;
    color: #222;
  }
`;

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
        <div className="decorative blue">
          <h3>HEAR</h3>
        </div>
        <div className="decorative red">
          <h3>FEEL</h3>
        </div>
        <div className="decorative green">
          <h3>THINK</h3>
        </div>
        <Login className="fas fa-sign-in-alt" title="Login" />
      </HomeContainer>
    );
  }
}

export default Home;
