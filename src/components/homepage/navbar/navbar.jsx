import React, { Component } from 'react'
import './navbar.css';
class navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            Home: "Inicio",
            About: "Nosotros",
            Known: "Conoce",
          }
        }

action = () => {
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");  
  navLinks.classList.toggle("open");
  links.forEach(link => {
  link.classList.toggle("fade");
});
};

render(){
        return(
            <div>
            <nav>
            <div className="hamburger" onClick={this.action}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <ul className="nav-links">
                <li><a href={'/'}>{this.state.Home}</a></li>
                <li><a href={'/about'}>{this.state.About}</a></li>
                <li><a href={'/known'}>{this.state.Known}</a></li>
            </ul>
            </nav>
            </div>
        )
    }
}

export default navbar;
