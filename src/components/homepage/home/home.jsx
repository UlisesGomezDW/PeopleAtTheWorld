import React, { Component } from "react";
import Slider from '../slider/images';
import Info from '../info/info';
import Presentation from '../presentation/presentation';


class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
       <Slider/>
       <Info/>
       <Presentation/>
      </div>
    );
  }
}

export default home;