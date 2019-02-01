import React from "react";
import { CSSTransition } from "react-transition-group";
import { Info } from "./Accordion";

export default class Feel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0
    };
    this.heightRef = React.createRef();
  }
  componentDidMount() {
    // Getting an exact value for height, to make CSS transition animation.
    const panel = this.heightRef.current;
    panel.style.visibility = "hidden";
    panel.style.position = "absolute";
    panel.style.display = "block";
    const height = panel.offsetHeight;
    this.setState({ height });
    panel.removeAttribute("style");
  }
  render() {
    return (
      <CSSTransition
        in={this.props.index === this.props.current}
        timeout={500}
        classNames="display"
        onEnter={e => (e.style.display = "block")}
        onExited={e => (e.style.display = "none")}
      >
        <Info {...this.props} ref={this.heightRef} height={this.state.height}>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sit amet commodo sapien, in facilisis ex. Pellentesque eu libero vel
            turpis laoreet elementum. Pellentesque mauris dolor, ornare sed leo
            ut, venenatis laoreet nisl. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Proin
            tincidunt, quam ut accumsan consectetur, sapien magna blandit purus,
            eu sollicitudin odio quam eget ligula. Sed nec libero mattis,
            facilisis orci a, egestas elit. Ut finibus bibendum porta. Ut quis
            vestibulum erat, eget iaculis sem. In hac habitasse platea dictumst.
            Vivamus finibus purus eget erat posuere, vitae commodo nulla
            ullamcorper. Pellentesque lobortis, nunc eu accumsan varius, tellus
            urna suscipit velit, non finibus justo dui ac leo. Sed vestibulum,
            enim a auctor sodales, lectus velit pretium ipsum, at fermentum
            turpis lacus in arcu. Donec in egestas nisl, non ornare ligula.
            Integer vulputate a orci eget facilisis. Phasellus consectetur purus
            purus, in finibus metus fringilla non. Aliquam sodales velit metus,
            euismod venenatis nunc eleifend a. Nulla in enim leo. Maecenas
            aliquet quam in magna pulvinar, quis vestibulum nunc ultricies.
            Vestibulum tempor risus eu elit venenatis gravida. Aenean ultricies,
            ipsum a pulvinar laoreet, urna orci sodales nunc, non vestibulum
            nisi augue quis elit. Vivamus finibus ligula sed velit sodales
            sollicitudin. Aliquam semper arcu nec vulputate tempor. Morbi
            feugiat ex eu odio posuere, mattis gravida nunc molestie. Nullam
            bibendum aliquam purus at vehicula. Morbi ultrices at odio at
            dignissim. Nunc luctus hendrerit lorem. Cras tempus porttitor
            lectus, ut viverra sem pellentesque commodo. Donec ultricies
            consectetur felis in gravida. Nulla efficitur scelerisque libero id
            pulvinar. Integer eget dui justo. Vestibulum accumsan efficitur
            lectus at imperdiet. Aenean quis lectus id quam posuere consectetur.
            Aliquam aliquet nibh magna, at fermentum eros consequat nec.
            Phasellus pharetra placerat sem nec rhoncus. Etiam eget eros semper
            justo luctus imperdiet a blandit odio. Nunc at dolor ac lacus
            iaculis lobortis. Nunc quis nibh sit amet magna finibus cursus ac
            eget leo. Mauris nec ante orci. Integer pulvinar est non urna
            sodales dictum. Aliquam vestibulum, justo id tincidunt auctor, lorem
            risus gravida nunc, et vulputate magna tellus a dui. Integer
            faucibus enim eu porta pellentesque. Ut eu nibh suscipit, consequat
            mauris quis, egestas urna. Nulla sed feugiat nisi, et mattis libero.
            Phasellus bibendum dignissim laoreet. Donec massa risus, dictum ut
            ultrices in, dignissim vel nulla. Sed sagittis enim ut sapien
            ultrices vulputate. Quisque eleifend, diam et pellentesque
            facilisis, enim lorem posuere ligula, ac sagittis lorem tortor non
            tortor. Maecenas odio massa, mattis sit amet ipsum vitae, tincidunt
            sodales eros. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Cras elementum vitae lacus sit amet laoreet. Quisque
            elementum, est at lobortis molestie, eros libero vestibulum arcu, ac
            fermentum sapien odio et urna. Aenean fermentum, erat nec vehicula
            ullamcorper, lacus nulla vulputate eros, sit amet auctor ex purus eu
            justo. Phasellus in porta purus. Proin fringilla volutpat nulla, ut
            facilisis diam malesuada at. Nullam semper accumsan tortor, sit amet
            lacinia ipsum dignissim vitae. Nulla luctus et eros eget dignissim.
            Nunc vel dolor odio. Donec risus orci, pretium eu augue eget,
            facilisis vehicula metus. Etiam et condimentum arcu. Pellentesque at
            volutpat tellus. Sed molestie tortor finibus vestibulum interdum.
            Aliquam sollicitudin sit amet erat eu vestibulum.
          </span>
        </Info>
      </CSSTransition>
    );
  }
}
