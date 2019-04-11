import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Loading from "../Loading";
import { handleVerification } from "../../redux/actions";

const StyledVerify = styled.div`
  background: #eee;
  margin: 0 auto;
  padding: 10px;
  width: 60%;
  height: 50%;
  border-radius: 10px;
`;

class Verify extends React.Component {
  state = {
    number: ""
  };
  componentDidMount() {
    const number = Math.random()
      .toString()
      .slice(2);
    this.setState({ number });
  }
  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.verifiedCharacterId && this.props.verifiedCharacterId) {
      localStorage.setItem(
        "ffxiv-lookup-saved-character",
        JSON.stringify(this.props.verifiedCharacterId)
      );
      this.props.history.push("/character");
    }
  }
  verifyCharacter = () => {
    console.log("id", this.props.id, "string", this.state.number);
    this.props.handleVerification(this.props.id, this.state.number);
  };
  render() {
    return (
      <StyledVerify>
        {this.props.loading ? (
          <Loading />
        ) : (
          <div>
            <p>
              Please log into your Square Enix account{" "}
              <a
                href="https://na.finalfantasyxiv.com/lodestone/"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              , select the character you would like to link, and paste the
              following number into that character's Lodestone profile before
              attempting login:
            </p>
            <br />
            <p>{this.state.number}</p>
            <br />
            <button onClick={this.verifyCharacter}>Verify</button>
            {this.props.error ? (
              <p style={{ color: "red" }}>{this.props.error}</p>
            ) : null}
          </div>
        )}
      </StyledVerify>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error,
    verifiedCharacterId: state.verifiedCharacterId
  };
};
export default connect(
  mapStateToProps,
  { handleVerification }
)(Verify);
