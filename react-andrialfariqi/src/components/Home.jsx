import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./Home.css";

class Home extends Component {
  state = {
    home: [
      {
        id: 1,
        image: "https://picsum.photos/1001/400",
        title: "First Image",
        description: "Random image by https://picsum.photos/",
      },
      {
        id: 2,
        image: "https://picsum.photos/1002/400",
        title: "Second Image",
        description: "Random image by https://picsum.photos/",
      },
      {
        id: 3,
        image: "https://picsum.photos/1003/400",
        title: "Third Image",
        description: "Random image by https://picsum.photos/",
      },
    ],
  };

  render() {
    return (
      <Carousel className="Carousel">
        {this.state.home.map((el) => {
          return (
            <Carousel.Item key={el.id} className="CarouselItem">
              <img className="d-block w-100" src={el.image} alt="First slide" />
              <Carousel.Caption>
                <h3>{el.title}</h3>
                <p>{el.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}

export default Home;
