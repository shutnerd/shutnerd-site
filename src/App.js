import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Routes from "./Routes";
import "./App.css";

class App extends Component {

  render() {
    const childProps = {
    };

    return (
      <div className="App container">
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default withRouter(App);
