import React from "react";
import styled from "styled-components";

const StyledAttributes = styled.section`
  width: 40%;
  display: flex;
  border: 1px solid black;

  div div {
    width: 100%;
    display: inline-block;
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
      {props.data.map(x => (
        <div key={x.attribute.name}>{x.attribute.name}</div>
      ))}
    </div>
    <div>
      {props.data.map(x => (
        <div key={`${x.attribute.name} value`}>{x.value}</div>
      ))}
    </div>
  </StyledAttributes>
);

export default Attributes;


//TRUNC(ROUND(TRUNC((Potency/100)*(WD+TRUNC((BaseDet*JobMod/1000),0))*
//TRUNC((AP/APDiv+(1-BaseDET/APdiv)),2))*TRUNC(ROUND(1+(DET-BaseDET)/DetDiv,4),3),1))

function truncate(num, d = 0){ // For toFixed without rounding
  return Number(num.toString().match(new RegExp(`^\\d+.?\\d{0,${d}}`))[0]);
}

function round(num, d = 0){ 
  return Number(num.toFixed(d));
}

function skillDamage(Potency, WD, BaseDET, JobMod, AP, APDiv, DET, DetDiv) { // HW formula
  return truncate(
    round(
      truncate(
        (Potency / 100) *
        (WD + truncate((BaseDET * JobMod) / 1000, 0)) *
        truncate(AP / APDiv + (1 - BaseDET / APDiv), 2)
      ) * truncate(round(1 + (DET - BaseDET) / DetDiv, 4), 3),
      1
    )
  );
}
