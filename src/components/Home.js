import React from 'react';
import styled from 'styled-components';
import TopBar from './TopBar';

const HomeContainer = styled.section`
    height: 100%;
`;

const HomeContent = styled.section`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    > div {
        width: 30%;
        border: 0.5px solid #bebebe;
        border-bottom: none;
        border-top: none;
        height: 100%;
    }
`;

const CharacterLookup = styled.div`
    background: #222;
`;

const LFG = styled.div`
    background: #222;
`;

const FFLogs = styled.div`
    background: #222;
`;

class Home extends React.Component {
    render(){
        return (
            <HomeContainer>
                <TopBar />
                <HomeContent>
                    <CharacterLookup></CharacterLookup>
                    <LFG></LFG>
                    <FFLogs></FFLogs>
                </HomeContent>
            </HomeContainer>
            );
    }
}

export default Home;