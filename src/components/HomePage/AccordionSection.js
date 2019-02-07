import React from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

const StyledTitle = styled.div`
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
  background: ${props => props.bg};

  &:nth-child(3) {
    border-top: none;
    border-bottom: none;
  }

  &:hover h3 {
    pointer-events: none;
    user-select: none;
    font-size: 4.2rem;
  }
`;

export const Info = styled.div`
  width: 90%;
  display: ${props => (props.open ? "block" : "none")};
  margin: 0 auto;
  border: 1px solid #222;
  border-top: none;
  padding: 10px 20px;

  &:nth-child(4) {
    border-top: 1px solid #222;
    border-bottom: none;
  }

  &.display-enter {
    display: block;
    height: 0;
    padding: 0 20px;

    * {
      position: relative;
      right: 20px;
      top: 10px;
      opacity: 0;
    }
  }
  &.display-enter-active {
    display: block;
    height: ${props => `${props.height}px`};
    padding: 10px 20px;
    transition: height 500ms ease, padding 500ms ease;

    * {
      opacity: 1;
      position: relative;
      right: 0;
      top: 0;
      transition: opacity 500ms ease-in, right 500ms ease-in, top 500ms ease;
    }
  }
  &.display-enter-done {
    display: block;
    height: ${props => `${props.height}px`};
    padding: 10px 20px;

    * {
      opacity: 1;
      position: relative;
      right: 0;
      top: 0;
    }
  }
  &.display-exit {
    display: block;
    height: ${props => `${props.height}px`};
    padding: 0 20px;
    * {
      opacity: 1;
      position: relative;
      right: 0;
      top: 10px;
    }
  }
  &.display-exit-active {
    display: block;
    height: 0;
    padding: 0 20px;
    transition: height 500ms ease;

    * {
      opacity: 0;
      position: relative;
      right: 20px;
      transition: opacity 200ms ease, right 200ms ease;
    }
  }
  &.display-exit-done {
    display: none;
    height: 0;

    * {
      right: 20px;
    }
  }
`;

export default class AccordionSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      open: false
    };
    this.heightRef = React.createRef();
  }
  componentDidMount() {
    this.retrieveHeight();
    window.addEventListener("resize", this.retrieveHeight);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.retrieveHeight);
  }
  retrieveHeight = () => {
    const panel = this.heightRef.current;
    panel.style.visibility = "hidden";
    panel.style.position = "absolute";
    panel.style.display = "block";
    panel.style.height = "auto";
    const height = panel.offsetHeight;
    this.setState({ height });
    panel.removeAttribute("style");
  };
  render() {
    return (
      <>
        <StyledTitle
          bg={this.props.sense.bg}
          onClick={this.props.handleSelection}
          data-index={this.props.index}
        >
          <h3>{this.props.sense.text}</h3>
        </StyledTitle>
        <CSSTransition
          in={this.props.index === this.props.current}
          timeout={500}
          classNames="display"
          onEntered={e => {
            this.setState({ open: true });
            this.retrieveHeight();
          }}
          onExited={e => this.setState({ open: false })}
        >
          <Info
            {...this.props}
            ref={this.heightRef}
            height={this.state.height}
            open={this.state.open}
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              sit amet commodo sapien, in facilisis ex. Pellentesque eu libero
              vel turpis laoreet elementum. Pellentesque mauris dolor, ornare
              sed leo ut, venenatis laoreet nisl. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Proin tincidunt, quam ut accumsan consectetur, sapien magna
              blandit purus, eu sollicitudin odio quam eget ligula. Sed nec
              libero mattis, facilisis orci a, egestas elit. Ut finibus bibendum
              porta. Ut quis vestibulum erat, eget iaculis sem. In hac habitasse
              platea dictumst. Vivamus finibus purus eget erat posuere, vitae
              commodo nulla ullamcorper. Pellentesque lobortis, nunc eu accumsan
              varius, tellus urna suscipit velit, non finibus justo dui ac leo.
              Sed vestibulum, enim a auctor sodales, lectus velit pretium ipsum,
              at fermentum turpis lacus in arcu. Donec in egestas nisl, non
              ornare ligula. Integer vulputate a orci eget facilisis. Phasellus
              consectetur purus purus, in finibus metus fringilla non. Aliquam
              sodales velit metus, euismod venenatis nunc eleifend a. Nulla in
              enim leo. Maecenas aliquet quam in magna pulvinar, quis vestibulum
              nunc ultricies. Vestibulum tempor risus eu elit venenatis gravida.
              Aenean ultricies, ipsum a pulvinar laoreet, urna orci sodales
              nunc, non vestibulum nisi augue quis elit. Vivamus finibus ligula
              sed velit sodales sollicitudin. Aliquam semper arcu nec vulputate
              tempor. Morbi feugiat ex eu odio posuere, mattis gravida nunc
              molestie. Nullam bibendum aliquam purus at vehicula. Morbi
              ultrices at odio at dignissim. Nunc luctus hendrerit lorem. Cras
              tempus porttitor lectus, ut viverra sem pellentesque commodo.
              Donec ultricies consectetur felis in gravida. Nulla efficitur
              scelerisque libero id pulvinar. Integer eget dui justo. Vestibulum
              accumsan efficitur lectus at imperdiet. Aenean quis lectus id quam
              posuere consectetur. Aliquam aliquet nibh magna, at fermentum eros
              consequat nec. Phasellus pharetra placerat sem nec rhoncus. Etiam
              eget eros semper justo luctus imperdiet a blandit odio. Nunc at
              dolor ac lacus iaculis lobortis. Nunc quis nibh sit amet magna
              finibus cursus ac eget leo. Mauris nec ante orci. Integer pulvinar
              est non urna sodales dictum. Aliquam vestibulum, justo id
              tincidunt auctor, lorem risus gravida nunc, et vulputate magna
              tellus a dui. Integer faucibus enim eu porta pellentesque. Ut eu
              nibh suscipit, consequat mauris quis, egestas urna. Nulla sed
              feugiat nisi, et mattis libero. Phasellus bibendum dignissim
              laoreet. Donec massa risus, dictum ut ultrices in, dignissim vel
              nulla. Sed sagittis enim ut sapien ultrices vulputate. Quisque
              eleifend, diam et pellentesque facilisis, enim lorem posuere
              ligula, ac sagittis lorem tortor non tortor. Maecenas odio massa,
              mattis sit amet ipsum vitae, tincidunt sodales eros. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Cras elementum vitae
              lacus sit amet laoreet. Quisque elementum, est at lobortis
              molestie, eros libero vestibulum arcu, ac fermentum sapien odio et
              urna. Aenean fermentum, erat nec vehicula ullamcorper, lacus nulla
              vulputate eros, sit amet auctor ex purus eu justo. Phasellus in
              porta purus. Proin fringilla volutpat nulla, ut facilisis diam
              malesuada at. Nullam semper accumsan tortor, sit amet lacinia
              ipsum dignissim vitae. Nulla luctus et eros eget dignissim. Nunc
              vel dolor odio. Donec risus orci, pretium eu augue eget, facilisis
              vehicula metus. Etiam et condimentum arcu. Pellentesque at
              volutpat tellus. Sed molestie tortor finibus vestibulum interdum.
              Aliquam sollicitudin sit amet erat eu vestibulum.
            </span>
          </Info>
        </CSSTransition>
      </>
    );
  }
}
