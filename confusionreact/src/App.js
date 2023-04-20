import React, { Component } from "react";
import Menu from "./components/MenuComponent";
import { DISHES } from "./shared/dishes";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import './App.css'
class App extends Component {

  

  render() {
     return (
      <BrowserRouter>
      <div className="App"> <Main /> </div>
      </BrowserRouter>
    );
  }
}
export default App;
