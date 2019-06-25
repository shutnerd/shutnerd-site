import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Routes from "./Routes";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {

  render() {
    const childProps = {
    };

    return (
      <div className="App container">
      <Router basename={process.env.PUBLIC_URL}>
      <Routes childProps={childProps} />      
      </Router>
      </div>
    );
  }
}

export default App;
