import React from "react";
import { CSSTransition } from "react-transition-group";
import { Info } from "./Accordion";

export default class Feel extends React.Component {
  componentDidMount() {
    console.log("mounted");
  }
  render() {
    return this.props.index === this.props.current ? (
      <CSSTransition
        in={this.props.index === this.props.current}
        timeout={1000}
        classNames="display"
        onEnter={() => console.log("entered")}
      >
        <Info {...this.props}>TESTING 2 SEPARATE</Info>
      </CSSTransition>
    ) : null;
  }
}
