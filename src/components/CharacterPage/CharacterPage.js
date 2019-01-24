import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Loading from '../Loading';
import Equipment from './Equipment';
import * as privateVar from '../../private';

const CharacterDisplay = styled.section`
    position: relative;
    background: #eee;
    height: 90%;
    width: 80%;
    margin: 0 auto;
`;

class CharacterPage extends React.Component {
    state = {
        loading: true,
        character: {},
        parses: [],
        average: undefined,
        error: '',
        gear: [],
    };
    componentDidMount(){
        this.fetchCharacterData();
    }
    fetchCharacterData = () => {
        axios.get(`https://xivapi.com/character/${this.props.match.params.id}` 
            + `?key=${privateVar.API_Key}`
            + '&extended=1'
            + '&snake_case=1')
            .then(res => {
                if (res.data.info.character.state === 1){
                    this.setState({
                        error: `Info for character with ID ${this.props.match.params.id} not found.  Please try again in a few minutes.`,
                        loading: false,
                    });
                    return;
                }
                this.setState({ character: res.data.character, gear: Object.values(res.data.character.gear_set.gear) })
                axios.get('https://www.fflogs.com/v1/parses/character'
                + `/${res.data.character.name.replace(/\s/, '%20')}`
                + `/${res.data.character.server}`
                + '/NA'
                + `?api_key=${privateVar.FFLogs_Key}`)
                    .then(parse => this.setState({
                        parses: parse.data,
                        average: parse.data.length 
                            ? (parse.data.reduce((a, b) => a + b.percentile, 0) / parse.data.length)
                            : null,
                        loading: false,
                        error: '',
                    }))
                    .catch(err => this.setState({ average: 'error', loading: false, }));
            })
            .catch(err => console.log(err));
    }
    render(){
        return (
            <CharacterDisplay>
                {this.state.loading 
                    ? <Loading /> 
                    : this.state.error 
                        ? 
                        <div>
                            {this.state.error}
                            <button onClick={this.fetchCharacterData}>Retry</button>
                        </div>
                        : (
                            <div>
                                <div>Character name is {this.state.character.name}</div>
                                <div>Character server is {this.state.character.server}</div>
                                {
                                
                                !this.state.average
                                    ? 'No FFLogs data found.'
                                    : this.state.average === 'error'
                                        ? 'FFLogs data could not be obtained.'
                                        : `Average of all parses is ${this.state.average}.`
                                }{console.log(this.state.gear)}
                                <Equipment
                                    head={this.state.gear.filter(x => x.item.item_uicategory.name === 'Head')[0]}
                                    mainHand={this.state.gear.filter(x => x.item.item_uicategory.name.match(/Arm$|Primary\sTool$/i))[0]}
                                    offHand={this.state.gear.filter(x => x.item.item_uicategory.name.match(/Shield$|Secondary\sTool$/i))[0]}
                                    hands={this.state.gear.filter(x => x.item.item_uicategory.name === 'Hands')[0]}
                                    body={this.state.gear.filter(x => x.item.item_uicategory.name === 'Body')[0]}
                                    waist={this.state.gear.filter(x => x.item.item_uicategory.name === 'Waist')[0]}
                                    legs={this.state.gear.filter(x => x.item.item_uicategory.name === 'Legs')[0]}
                                    feet={this.state.gear.filter(x => x.item.item_uicategory.name === 'Feet')[0]}
                                    ring1={this.state.gear.filter(x => x.item.item_uicategory.name === 'Ring')[0]}
                                    ring2={this.state.gear.filter(x => x.item.item_uicategory.name === 'Ring')[1]}
                                    necklace={this.state.gear.filter(x => x.item.item_uicategory.name === 'Necklace')[0]}
                                    bracelets={this.state.gear.filter(x => x.item.item_uicategory.name === 'Bracelets')[0]}
                                    earrings={this.state.gear.filter(x => x.item.item_uicategory.name === 'Earrings')[0]}
                                    crystal={this.state.gear.filter(x => x.item.item_uicategory.name === 'Soul Crystal')[0]}
                                />
                            </div>
                )}
            </CharacterDisplay>
        );
    }
}

export default CharacterPage;