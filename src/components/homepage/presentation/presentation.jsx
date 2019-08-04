import React, { Component } from "react";
import "./presentation.css";
import Rocket from '../../../assets/icons/rocket.svg';
class presentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textIntro: "Agrega tu tarjeta y conoce amigos de todas partes del mundo.",
      tittleIntro: "¡Comienza ya!"
    };
  }
  render() {
    return (
      <div className="content-p">
        <h1>{this.state.tittleIntro}</h1>
        <p>{this.state.textIntro}</p>
        <img src={Rocket}/>
        <a className="btn-init" href={'/register'}>Vamos</a>
      </div>
    );
  }
}

export default presentation;