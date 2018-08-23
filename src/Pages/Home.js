import React, { Component } from "react";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import Jumbotron from "../Components/Jumbotron.js";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: ["image1", "image2", "image3", "image4", "image6", "image7"]
    };
  }
  render() {
    let images = this.state.images.map(image => {
      console.log(image);
      return (
        <div className="col-md-4">
          <div className="thumbnail">
            <img
              key={image}
              src={require(`../images/${image}.jpg`)}
              alt=""
              className="img-responsive img-size"
            />
          </div>
        </div>
      );
    });
    return (
      <div>
        <Navbar />
        <Jumbotron title="Galleries" subtitle="Here are some galleries" />
        <div class="row">{images}</div>
        <Footer />
      </div>
    );
  }
}

export default Home;
