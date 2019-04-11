import React from "react";
import AccordionSection from "./AccordionSection";

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
      <section className="accordion">
        {this.state.senses.map((sense, index) => (
          <AccordionSection
            key={sense.text}
            sense={sense}
            index={String(index)}
            current={this.state.index}
            handleSelection={this.handleSelection}
          />
        ))}
      </section>
    );
  }
}

export default Accordion;
