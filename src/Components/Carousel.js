import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
// import images from "/Assets/pexels-maksim-goncharenok-4348633.jpg";

export class BootstrapCarouselDemo extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row title" style={{ marginBottom: "20px" }}>
            <div class="col-sm-12 btn btn-warning"></div>
          </div>
        </div>

        <div className="container-fluid">
          <Carousel interval={2000} keyboard={false} pauseOnHover={true}>
            <Carousel.Item style={{ height: "500px" }}>
              <img
                style={{ height: "500px", width: "900px" }}
                className="d-block w-100"
                //  {require('https://imgur.com/axnpZse')}
                src="https://i.imgur.com/axnpZse.jpg"
                alt="running"
              />

              <Carousel.Caption>
                <h3> </h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "500px" }}>
              <img
                style={{ height: "500px" }}
                className="d-block w-100"
                src={"https://i.imgur.com/EceGZct.jpg"}
                alt=""
              />

              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "500px" }}>
              <img
                style={{ height: "500px" }}
                className="d-block w-100"
                src={"https://i.imgur.com/cgjghAo.jpg"}
                alt=""
              />
              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default BootstrapCarouselDemo;
