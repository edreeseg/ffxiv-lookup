import React from 'react';
import styled from 'styled-components';

const StyledAttributes = styled.section`
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    border: 1px solid black;

    div div {
        padding: 2px 5px;
        border-bottom: 1px solid black;
    }

    div div:last-child {
        border-bottom: none;
    }

    > div:first-child div {
        padding-right: 15px;
        border-right: 1px solid black;
    }
`;

const Attributes = props => (
    <StyledAttributes>
        <div>
            {props.data.map(x => <div key={x.attribute.name}>{x.attribute.name}</div>)}
        </div>
        <div>
            {props.data.map(x => <div key={`${x.attribute.name} value`}>{x.value}</div>)}
        </div>
    </StyledAttributes>
);

export default Attributes;