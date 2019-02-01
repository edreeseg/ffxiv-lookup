import React from "react";
import { CSSTransition } from "react-transition-group";
import { Info } from "./Accordion";

export default class Feel extends React.Component {
  componentDidMount() {
    console.log(this.props.index === this.props.current);
  }
  render() {
    return (
      <CSSTransition
        in={this.props.index === this.props.current}
        timeout={{ enter: 500, exit: 500 }}
        classNames="display"
        onEnter={e => (e.style.display = "block")}
        onExited={e => (e.style.display = "none")}
      >
        <Info {...this.props}>
          <h3>TESTING 2 SEPARATE</h3>
        </Info>
      </CSSTransition>
    );
  }
}
