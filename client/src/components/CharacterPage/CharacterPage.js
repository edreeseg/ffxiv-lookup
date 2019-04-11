import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { characterFetch } from "../../redux/actions";
import Loading from "../Loading";
import Equipment from "./Equipment";
import Attributes from "./Attributes";
import Verify from "./Verify";

const CharacterDisplay = styled.section`
  position: relative;
  background: #eee;
  height: 90%;
  width: 80%;
  padding: 15px;
  border-radius: 10px;
  margin: 0 auto;
`;

class CharacterPage extends React.Component {
  state = {
    verify: false,
    id: this.props.match.params.id,
    character: {},
    gear: [],
    attributes: []
  };
  componentDidMount() {
    if (this.state.id) this.fetchCharacterData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.id &&
      JSON.stringify(prevState.character) !==
        JSON.stringify(this.props.character)
    ) {
      this.setState({
        character: this.props.character,
        gear: Object.values(this.props.character.gear_set.gear),
        attributes: this.props.character.gear_set.attributes
      });
    } else if (
      this.props.savedCharacter !== null &&
      JSON.stringify(this.state.character) !==
        JSON.stringify(this.props.savedCharacter)
    ) {
      this.setState({
        character: this.props.savedCharacter,
        gear: Object.values(this.props.savedCharacter.gear_set.gear),
        attributes: this.props.savedCharacter.gear_set.attributes
      });
    }
  }
  fetchCharacterData = () => {
    this.props.characterFetch(this.state.id);
  };
  render() {
    return this.state.verify ? (
      <Verify history={this.props.history} id={this.props.match.params.id} />
    ) : (
      <CharacterDisplay>
        {this.props.loading ? (
          <Loading />
        ) : this.props.error ? (
          <div>
            {this.props.error}
            <button onClick={this.fetchCharacterData}>Retry</button>
          </div>
        ) : (
          <div>
            <div>Character name is {this.state.character.name}</div>
            <div>Character server is {this.state.character.server}</div>
            {!this.props.average
              ? "No FFLogs data found."
              : this.props.average === "error"
              ? "FFLogs data could not be obtained."
              : `Average of all parses is ${this.state.average}.`}
            <Equipment
              character={this.state.character}
              head={
                this.state.gear.filter(
                  x => x.item.item_uicategory.name === "Head"
                )[0]
              }
              mainHand={
                this.state.gear.filter(x =>
                  x.item.item_uicategory.name.match(/Arm$|Primary\sTool$/i)
                )[0]
              }
              offHand={
                this.state.gear.filter(x =>
                  x.item.item_uicategory.name.match(/Shield$|Secondary\sTool$/i)
                )[0]
              }
              hands={
                this.state.gear.filter(
                  x => x.item.item_uicategory.name === "Hands"
                )[0]
              }
              body={
                this.state.gear.filter(
                  x => x.item.item_uicategory.name === "Body"
                )[0]
              }
              waist={
                this.state.gear.filter(
                  x => x.item.item_uicategory.name === "Waist"
                )[0]
              }
              legs={
                this.state.gear.filter(
                  x => x.item.item_uicategory.name === "Legs"
                )[0]
              }
              feet={
                this.state.gear.filter(
                  x => x.item.item_uicategory.name === "Feet"
                )[0]
              }
              ring1={
                this.state.gear.filter(
                  x => x.item.item_uicategory.name === "Ring"
                )[0]
              }
              ring2={
                this.state.gear.filter(
                  x => x.item.item_uicategory.name === "Ring"
                )[1]
              }
              necklace={
                this.state.gear.filter(
                  x => x.item.item_uicategory.name === "Necklace"
                )[0]
              }
              bracelets={
                this.state.gear.filter(
                  x => x.item.item_uicategory.name === "Bracelets"
                )[0]
              }
              earrings={
                this.state.gear.filter(
                  x => x.item.item_uicategory.name === "Earrings"
                )[0]
              }
              crystal={
                this.state.gear.filter(
                  x => x.item.item_uicategory.name === "Soul Crystal"
                )[0]
              }
            />
            <Attributes data={this.state.attributes} />
          </div>
        )}
        <button
          onClick={() =>
            this.setState(prevState => ({ verify: !prevState.verify }))
          }
        >
          Claim this character
        </button>
      </CharacterDisplay>
    );
  }
}

const mapStateToProps = state => {
  return {
    savedCharacter: state.savedCharacter,
    character: state.character,
    loading: state.loading,
    error: state.error,
    parses: state.parses,
    parseAverage: state.parseAverage
  };
};

export default connect(
  mapStateToProps,
  {
    characterFetch
  }
)(CharacterPage);
