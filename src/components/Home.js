import React from 'react';
import img1 from "../assets/image5.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/img1.jpg"
import { Container, Row, Col, Card, CardBody, Carousel } from "react-bootstrap";

function Home() {
    return (
        <div>
            <Carousel className="mt-1 mb-1">
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="First slide" /> */}
                    <img className="d-block w-100" src={img1} alt="First slide" />
                    <Carousel.Caption>
                        <h3>Experience like a big screen</h3>
                        <p>Did you miss it in theatres? Experience it like never before on your home screens.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Second slide" /> */}
                    <img className="d-block w-100" src={img2} alt="First slide" />
                    <Carousel.Caption>
                        <h3>What to Watch ?</h3>
                        <p>Browse through the list of movies...</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    <img className="d-block w-100" src={img3} alt="First slide" />
                    <Carousel.Caption>
                        <h3>Are u Bored? We got you covered</h3>
                        <p>No more boring weekends. Here are few suggestions for you.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Container fluid="md mb-2">
                <Row>
                    <Col className="justify-content-center">
                        <img src={img4} className="d-block w-100 mt-1" />
                    </Col>
                    <Col>
                        <Card className="w-100 h-100">
                            <CardBody>
                                <h3>Latest Releases</h3>
                                <p>Rock your weekends with our latest and uncut version releases.</p>
                                <p>Stay tuned for more updates...</p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home