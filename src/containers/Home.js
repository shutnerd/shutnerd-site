import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {

  renderLander() {
    let name = this.props.match.params.name
    if (name == null) {
      name = "NERD"
    }

    return (
      <div className="lander">
        <center>
          <span><br/><br/>     
            <h1>SHUT {name.toUpperCase()}</h1>
          </span>
        </center>  
      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        {this.renderLander()}
      </div>
    );
  }
}
