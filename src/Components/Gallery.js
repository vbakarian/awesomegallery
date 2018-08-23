import React, { Component } from "react";
import Jumbotron from "../Components/Jumbotron.js";
import Navbar from "../Components/Navbar.js";
import Footer from "./Footer.js";
import "./Gallery.css";
class Gallery extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Galleries" subtitle="Here are some galleries" />

        <Footer />
      </div>
    );
  }
}
export default Gallery;
