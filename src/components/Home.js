import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import Search from './Search';
import CharacterPage from './CharacterPage/CharacterPage';

const HomeContainer = styled.section`
    height: 100%;
`;

class Home extends React.Component {
    state = {
    };
    render(){
        return (
            <HomeContainer>
                <Route exact
                    path="/"
                    render={props => <Search {...props} />}
                />
                <Route 
                    path="/character/:id"
                    render={props => <CharacterPage {...props} data={this.state.activeCharacter}/>}
                />
            </HomeContainer>
            );
    }
}

export default Home;