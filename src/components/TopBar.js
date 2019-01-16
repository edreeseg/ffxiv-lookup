import React from 'react';
import styled from 'styled-components';

const StyledTopBar = styled.header`
    height: 10%;
    border-bottom: 0.5px solid #bebebe;
    background: darkslategray;
`;

const InnerStyles = styled.div`
    position: relative;
    margin: 0 auto;
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    > div {
        height: 100%
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0.5px solid #bebebe;
        border-top: none;
        border-bottom: none;
        transform: skew(140deg, 0);
        transform-origin: center bottom;

        > h2 {
            transform: skew(-140deg, 0);
            font-size: 2rem;
            cursor: pointer;
            color: #bebebe;
        }
    }

    > h1 {
        position: absolute;
        color: #bebebe
        top: 50%;
        left: -12.5%;
        transform: translateY(-50%) translateX(50%);
        font-size: 2rem;
        cursor: pointer;
    }
`;

const CharacterLookupHeader = styled.div`
    background: #222;
`;

const LFGHeader = styled.div`
    background: #222;
`;

const FFLogsHeader = styled.div`
    background: #222;
`;

const TopBar = props => (
    <StyledTopBar>
        <InnerStyles>
            <h1>FFXIV<br/>Lookup</h1>
            <CharacterLookupHeader>
                <h2>Character Lookup</h2>
            </CharacterLookupHeader>
            <LFGHeader>
                <h2>LFG</h2>
            </LFGHeader>
            <FFLogsHeader>
                <h2>FFLogs</h2>
            </FFLogsHeader>
        </InnerStyles>
    </StyledTopBar>
);

export default TopBar;