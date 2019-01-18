import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Loading from './Loading';
import * as privateVar from '../private';

const CharacterDisplay = styled.section`
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
                    console.log(res);
                    this.setState({
                        error: `Info for character with ID ${this.props.match.params.id} not found.  Please try again in a few minutes.`,
                        loading: false,
                    });
                    return;
                }
                this.setState({ character: res.data.character });
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
                    }, () => console.log(this.state)))
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
                                <div>
                                    {
                                    
                                    !this.state.average
                                        ? 'No FFLogs data found.'
                                        : this.state.average === 'error'
                                            ? 'FFLogs data could not be obtained.'
                                            : `Average of all parses is ${this.state.average}.`
                                    }
                                </div>
                            </div>
                )}
            </CharacterDisplay>
        );
    }
}

export default CharacterPage;