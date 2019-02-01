import React from "react";
import { CSSTransition } from "react-transition-group";
import { Info } from "./Accordion";

export default props =>
  props.index === props.current ? (
    <CSSTransition
      in={props.index === props.current}
      timeout={1000}
      classNames="display"
    >
      <Info {...props}>TESTING 3 SEPARATE</Info>
    </CSSTransition>
  ) : null;
