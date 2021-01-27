import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './LandingPage.css';

class LandingPage extends Component {
  render() { 
    const muStyle={
      margin: "auto",
      textAlign: "center"
    };

    return ( 
    <div className="landing">
      <h3 style={muStyle}>I am a LandingPage</h3>
      <button className="btn btn-dark"><a href="/#/ScreenBySize">הכנס</a></button>

{/* 
      <Carousel>
  <Carousel.Item>
    <img style={muStyle}
      className="d-block w-100vw"
      src="https://picsum.photos/200/300"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={muStyle}
      className=""
      src="https://picsum.photos/200/300"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={muStyle}
      className="d-block w-100vw"
      src="https://picsum.photos/200/300"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}

    </div>

      );
  }
}
 

export default LandingPage;