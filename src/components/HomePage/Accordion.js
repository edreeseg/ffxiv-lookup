import React from "react";
import styled from "styled-components";

import Hear from "./HearSection";
import Feel from "./FeelSection";
import Think from "./ThinkSection";

// Should implement React Transition Group to animate opening and closing of panels.

const StyledAccordion = styled.section`
  width: 90%;
  margin: 0 auto;
  background: #eee;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 10px;

  .blue {
    background: #0d2c40;
  }
  .red {
    background: #f15a30;
  }
  .green {
    background: #2de0ad;
    color: #222;
  }
`;

const AccordionSection = styled.div`
  height: 3rem;
  width: 90%;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #eee;
  border: 1px solid #222;

  &:nth-child(3) {
    border-top: none;
    border-bottom: ${props =>
      props.index === props.current ? "1px solid #222" : "none"};
  }

  &:hover h3 {
    pointer-events: none;
    user-select: none;
    color: gray;
  }
`;

export const Info = styled.div`
  display: ${props => (props.index === props.current ? "block" : "none")};
  width: 90%;
  height: 10rem;
  margin: 0 auto;
  border: 1px solid #222;
  border-top: none;
  padding: 10px;

  &:nth-child(4) {
    border-bottom: ${props =>
      props.index === props.current ? "none" : "1px solid #222"};
  }
`;

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: null
    };
  }
  handleSelection = e => {
    e.persist();
    this.setState(prevState => {
      return {
        index:
          prevState.index === e.target.dataset.index
            ? null
            : e.target.dataset.index
      };
    });
  };
  render() {
    return (
      <StyledAccordion>
        <AccordionSection
          data-index="0"
          index="0"
          current={this.state.index}
          className="blue"
          onClick={this.handleSelection}
        >
          <h3>HEAR</h3>
        </AccordionSection>
        <Hear index="0" current={this.state.index}>
          TESTING 1
        </Hear>
        <AccordionSection
          data-index="1"
          index="1"
          current={this.state.index}
          className="red"
          onClick={this.handleSelection}
        >
          <h3>FEEL</h3>
        </AccordionSection>
        <Feel index="1" current={this.state.index}>
          TESTING 2
        </Feel>
        <AccordionSection
          data-index="2"
          index="2"
          current={this.state.index}
          className="green"
          onClick={this.handleSelection}
        >
          <h3>THINK</h3>
        </AccordionSection>
        <Think index="2" current={this.state.index}>
          TESTING 3
        </Think>
      </StyledAccordion>
    );
  }
}

export default Accordion;
