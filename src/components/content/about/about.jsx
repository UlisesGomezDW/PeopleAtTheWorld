import React, { Component } from "react";
import "./about.css";
import ImgAbout from '../../../assets/icons/teamwork.svg';
class presentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textIntro: "Es una aplicación web cuyo objetivo es conectarte con amigos de todo el mundo.",
      tittleIntro: "People at the world"
    };
  }
  render() {
    return (
      <div className="content-p">
        <h1>{this.state.tittleIntro}</h1>
        <p>{this.state.textIntro}</p>
        <img src={ImgAbout}/>
        <a className="btn-init" href={'/register'}>Registrate</a>
      </div>
    );
  }
}

export default presentation;