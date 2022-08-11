import React, { Component } from "react";
import { render } from "react-dom";

// import Header from './containers/header/Header'
import Main from './pages/main/Main'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Test
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);