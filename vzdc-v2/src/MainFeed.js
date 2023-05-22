import React from 'react';
import { Col, Carousel, Card, ListGroup } from 'react-bootstrap';

const MainFeed = () => {
  return (
    <Col md={8} className="main-feed">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="https://vzdc.org/storage/event_banners/1682908850.jpg" alt="Event 1" />
          <Carousel.Caption>
            <h3>Event 1</h3>
            <p>Description of Event 1</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://vzdc.org/storage/event_banners/1682909090.png" alt="Event 2" />
          <Carousel.Caption>
            <h3>Event 2</h3>
            <p>Description of Event 2</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more carousel items as needed */}
      </Carousel>

      <Card className="news-feed">
        <Card.Header>News</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h5>Article 1</h5>
              <p>Summary of Article 1</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Article 2</h5>
              <p>Summary of Article 2</p>
            </ListGroup.Item>
            {/* Add more news items as needed */}
          </ListGroup>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MainFeed;
