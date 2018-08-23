import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Gallery from "./Components/Gallery.js";

import Home from "./Pages/Home.js";
class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/galleries" component={Gallery} />
          </div>
        </Router>
      
    );
  }
}

export default App;
