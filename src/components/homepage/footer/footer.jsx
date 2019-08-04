import React, { Component } from 'react'
import './footer.css';
class footer extends Component {
    constructor(props){
        super(props)
        this.state = {
            textFooter: "People at the World",
          }
        }
render(){
        return(
            <div>
            <div className="footer">
                <p>{this.state.textFooter}</p>
            </div>
            </div>
        )
    }
}

export default footer;
