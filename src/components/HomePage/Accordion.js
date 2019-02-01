import React from "react";
import styled from "styled-components";

import Hear from "./HearSection";
import Feel from "./FeelSection";
import Think from "./ThinkSection";

const StyledAccordion = styled.section`
  width: 90%;
  margin: 0 auto;
  background: #eee;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 10px;

  .display-enter {
    display: block;
    height: 0;
    padding: 0;
    border: none;

    * {
      opacity: 0;
    }
  }
  .display-enter-active {
    /* Setting timeout to 0 prevents an inital delay, but messes with state */
    display: block;
    height: 10rem;
    transition: height 500ms ease, padding 500ms ease;
    border: 1px solid #222;
    padding: 10px;

    * {
      opacity: 1;
      transition: opacity 250ms ease;
    }
  }
  .display-enter-done {
    display: block;
    height: 10rem;
    transition: height 500ms ease;
    border: 1px solid #222;
    padding: 10px;

    * {
      opacity: 1;
      transition: opacity 250ms ease;
    }
  }
  .display-exit {
    display: block;
    height: 10rem;
    border: 1px solid #222;
    * {
      opacity: 1;
    }
  }
  .display-exit-active {
    display: block;
    height: 0;
    padding: 0;
    border-top: none;
    border-bottom: none;
    transition: height 500ms ease, padding 500ms ease;

    * {
      opacity: 0;
      transition: opacity 250ms ease;
    }
  }
  .display-exit-done {
    display: none;
    height: 0;
    padding: 0;
  }
  .blue {
    background: #0d2c40;
  }
  .red {
    background: #f15a30;
  }
  .green {
    background: #19a67e;
  }
`;

const AccordionSection = styled.div`
  height: 7rem;
  width: 90%;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #eee;
  border: 1px solid #222;
  font-size: 4rem;
  font-weight: 300;

  &:hover h3 {
    pointer-events: none;
    user-select: none;
    font-size: 4.2rem;
  }
`;

export const Info = styled.div`
  width: 90%;
  display: none;
  margin: 0 auto;
  border: 1px solid #222;
  border-top: none;
  padding: 10px;
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
