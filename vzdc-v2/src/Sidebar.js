import React from 'react';
import { Col, Card, ListGroup, Table, Row } from 'react-bootstrap';

const generateWeatherData = () => {
  const airports = ['DCA', 'JFK', 'LAX', 'ORD', 'ATL', 'DFW', 'DEN'];
  const conditions = ['VFR', 'IFR'];
  const winds = ['5 kts', '10 kts', '15 kts', '20 kts'];
  const altimeters = ['29.92 inHg', '30.00 inHg', '30.10 inHg'];

  const rows = [];
  for (let i = 0; i < 7; i++) {
    const airport = airports[Math.floor(Math.random() * airports.length)];
    const condition = conditions[Math.floor(Math.random() * conditions.length)];
    const wind = winds[Math.floor(Math.random() * winds.length)];
    const altimeter = altimeters[Math.floor(Math.random() * altimeters.length)];

    rows.push(
      <tr key={i}>
        <td>{airport}</td>
        <td>{condition}</td>
        <td>{wind}</td>
        <td>{altimeter}</td>
      </tr>
    );
  }

  return rows;
};

const Sidebar = () => {
  return (
    <Col md={4} className="sidebar">
      <Card className="mb-4">
        <Card.Header>Who's Online</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>John Doe</Col>
                <Col>DCA_TWR</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Jane Smith</Col>
                <Col>DCA_APP</Col>
              </Row>
            </ListGroup.Item>
            {/* Add more online users as needed */}
          </ListGroup>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>Who's Flying</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>ABC123</Col>
                <Col>Taxing</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>DEF456</Col>
                <Col>En Route</Col>
              </Row>
            </ListGroup.Item>
            {/* Add more flying users as needed */}
          </ListGroup>
        </Card.Body>
      </Card>

      {/* Add spacing between sections */}
      <div className="section-spacing" />

      <Card className="mb-4">
        <Card.Header>Weather</Card.Header>
        <Card.Body className="weather-table-body">
          <div className="weather-table-wrapper">
            <Table striped bordered className="weather-table">
              <thead>
                <tr>
                  <th>Airport</th>
                  <th>Conditions</th>
                  <th>Wind</th>
                  <th>Altimeter</th>
                </tr>
              </thead>
              <tbody>{generateWeatherData()}</tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Sidebar;
