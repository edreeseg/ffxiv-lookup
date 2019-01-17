import React from 'react';
import styled from 'styled-components';

const StyledTopBar = styled.header`
    height: 0;
`;

const InnerStyles = styled.div``;

const TopBar = props => (
    <StyledTopBar>
        <InnerStyles>
            <h1>FFXIV<br/>Lookup</h1>
            <div>
                <h2>Character Lookup</h2>
            </div>
            <div>
                <h2>LFG</h2>
            </div>
            <div>
                <h2>FFLogs</h2>
            </div>
        </InnerStyles>
    </StyledTopBar>
);

export default TopBar;