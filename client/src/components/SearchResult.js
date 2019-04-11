import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledResult = styled.div`
  display: flex;

  > div {
    width: 33.3%%;
    width: calc(100% / 3);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

class SearchResult extends React.Component {
  render() {
    return (
      <Link to={`/character/${this.props.data.id}`}>
        <StyledResult>
          <div>
            <img src={this.props.data.avatar} alt={this.props.data.name} />
          </div>
          <div>Name: {this.props.data.name}</div>
          <div>Server: {this.props.data.server}</div>
        </StyledResult>
      </Link>
    );
  }
}

export default SearchResult;
