import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { characterFetch } from "../../redux/actions";
import Loading from "../Loading";
import Equipment from "./Equipment";
import Attributes from "./Attributes";

const CharacterDisplay = styled.section`
  position: relative;
  background: #eee;
  height: 90%;
  width: 80%;
  padding: 15px;
  border-radius: 10px;
  margin: 0 auto;
`;

class MyCharacterPage extends React.Component {
  componentDidMount(){
    console.log(this.props);
  }
  render() {
    return this.props.savedCharacter ? (
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
            <div>Character name is {this.props.savedCharacter.name}</div>
            <div>Character server is {this.props.savedCharacter.server}</div>
            {!this.props.average
              ? "No FFLogs data found."
              : this.props.average === "error"
              ? "FFLogs data could not be obtained."
              : `Average of all parses is ${this.state.average}.`}
            <Equipment
              character={this.props.savedCharacter}
              head={
                this.props.gear.filter(
                  x => x.item.item_uicategory.name === "Head"
                )[0]
              }
              mainHand={
                this.props.gear.filter(x =>
                  x.item.item_uicategory.name.match(/Arm$|Primary\sTool$/i)
                )[0]
              }
              offHand={
                this.props.gear.filter(x =>
                  x.item.item_uicategory.name.match(/Shield$|Secondary\sTool$/i)
                )[0]
              }
              hands={
                this.props.gear.filter(
                  x => x.item.item_uicategory.name === "Hands"
                )[0]
              }
              body={
                this.props.gear.filter(
                  x => x.item.item_uicategory.name === "Body"
                )[0]
              }
              waist={
                this.props.gear.filter(
                  x => x.item.item_uicategory.name === "Waist"
                )[0]
              }
              legs={
                this.props.gear.filter(
                  x => x.item.item_uicategory.name === "Legs"
                )[0]
              }
              feet={
                this.props.gear.filter(
                  x => x.item.item_uicategory.name === "Feet"
                )[0]
              }
              ring1={
                this.props.gear.filter(
                  x => x.item.item_uicategory.name === "Ring"
                )[0]
              }
              ring2={
                this.props.gear.filter(
                  x => x.item.item_uicategory.name === "Ring"
                )[1]
              }
              necklace={
                this.props.gear.filter(
                  x => x.item.item_uicategory.name === "Necklace"
                )[0]
              }
              bracelets={
                this.props.gear.filter(
                  x => x.item.item_uicategory.name === "Bracelets"
                )[0]
              }
              earrings={
                this.props.gear.filter(
                  x => x.item.item_uicategory.name === "Earrings"
                )[0]
              }
              crystal={
                this.props.gear.filter(
                  x => x.item.item_uicategory.name === "Soul Crystal"
                )[0]
              }
            />
            <Attributes data={this.props.attributes} />
          </div>
        )}
      </CharacterDisplay>
    ) : (
      <CharacterDisplay>
        CHARACTER NOT VERIFIED. PLEASE FIND CHARACTER VIA SEARCH TOOL AND GO
        THROUGH VERIFICATION PROCESS.
      </CharacterDisplay>
    );
  }
}

const mapStateToProps = state => {
  return {
    character: state.character,
    gear: state.gear,
    loading: state.loading,
    error: state.error,
    parses: state.parses,
    parseAverage: state.parseAverage,
    attributes: state.attributes,
    savedCharacter: state.savedCharacter,
  };
};

export default connect(
  mapStateToProps,
  {
    characterFetch,
  }
)(MyCharacterPage);
