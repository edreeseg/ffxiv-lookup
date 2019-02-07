import React from "react";
import styled from "styled-components";

import AccordionSection from "./AccordionSection";

const StyledAccordion = styled.section`
  width: 90%;
  margin: 0 auto;
  background: #eee;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 10px;
`;

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: null,
      senses: [
        {
          text: "HEAR",
          bg: "#0d2c40"
        },
        {
          text: "FEEL",
          bg: "#f15a30"
        },
        {
          text: "THINK",
          bg: "#19a67e"
        }
      ]
    };
  }
  handleSelection = e => {
    e.persist();
    const index = e.target.dataset.index;
    this.setState(prevState => {
      return {
        index: prevState.index === index ? null : index
      };
    });
  };
  render() {
    return (
      <StyledAccordion>
        {this.state.senses.map((sense, index) => (
          <AccordionSection
            key={sense.text}
            sense={sense}
            index={String(index)}
            current={this.state.index}
            handleSelection={this.handleSelection}
          />
        ))}
      </StyledAccordion>
    );
  }
}

export default Accordion;
