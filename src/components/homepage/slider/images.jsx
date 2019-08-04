import React, { Component } from 'react'
import './images.css';

class images extends Component {
    constructor(props){
        super(props)
        this.state = {
            TittleImage: "People at the world" 
          }
        }

render(){
        return(
        <div>
            <div className="content">
                <ul>
                    <li><img className="image" src="https://images.pexels.com/photos/573238/pexels-photo-573238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/><div className="tittle-page">{this.state.TittleImage}</div></li>
                    <li><img className="image" src="https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/><div className="tittle-page">{this.state.TittleImage}</div></li>
                    <li><img className="image" src="https://images.pexels.com/photos/875862/pexels-photo-875862.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/><div className="tittle-page">{this.state.TittleImage}</div></li>
                    <li><img className="image" src="https://images.pexels.com/photos/310983/pexels-photo-310983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/><div className="tittle-page">{this.state.TittleImage}</div></li>               
                </ul>
            </div>
        </div>
        )
    }
}

export default images;
