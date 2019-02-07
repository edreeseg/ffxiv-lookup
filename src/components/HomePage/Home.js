import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Accordion from "./Accordion";

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

const Home = props => (
  <>
    <Accordion />
    <Link to="/login">
      <LoginButton className="fas fa-sign-in-alt" />
    </Link>
  </>
);

export default Home;
