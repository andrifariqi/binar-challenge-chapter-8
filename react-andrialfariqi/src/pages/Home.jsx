import React, { Component } from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import "../App.css";

class Home extends Component {
  state = {
    home: [
      {
        id: 1,
        img: "https://picsum.photos/401/320",
        title: "First Image",
        description: "First Example Carousel",
      },
      {
        id: 2,
        img: "https://picsum.photos/402/320",
        title: "Second Image",
        description: "Second Example Carousel",
      },
      {
        id: 3,
        img: "https://picsum.photos/403/320",
        title: "Third Image",
        description: "Third Example Carousel",
      },
    ],
  };

  render() {
    return (
      <Container className="ec-player">
        <Row>
          <Col></Col>
          <Col xs={6}>
            <Carousel variant="dark">
              {this.state.home.map((el) => {
                return (
                  <Carousel.Item>
                    <img
                      key={el.id}
                      className="d-block w-100"
                      src={el.img}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h5>{el.title}</h5>
                      <p>{el.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
