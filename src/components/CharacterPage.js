import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import * as privateVar from '../private';

const CharacterDisplay = styled.section`
    background: #eee;
    height: 90%;
    width: 80%;
    margin: 0 auto;
`;

class CharacterPage extends React.Component {
    state = {
        character: {},
    };
    componentDidMount(){
        axios.get(`https://xivapi.com/character/${this.props.match.params.id}` 
            + `?key=${privateVar.API_Key}`
            + '&extended=1'
            + '&snake_case=1')
            .then(res => this.setState({ character: res.data.character }))
            .catch(err => console.log(err));
    }
    render(){
        return (
            <CharacterDisplay>

            </CharacterDisplay>
        );
    }
}

export default CharacterPage;