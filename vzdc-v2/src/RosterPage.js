import React from 'react';
import { Container, Table } from 'react-bootstrap';
import Navigation from './Navigation';
import Banner from './Banner';

const certifications = ['GND', 'TWR', 'APP'];

const generateRandomData = () => {
  const rosterData = [];
  for (let i = 0; i < 20; i++) {
    const person = {
      name: `Person ${i + 1}`,
      positions: {
        Minor: getRandomCertification(),
        BWI: getRandomCertification(),
        DCA: getRandomCertification(),
        IAD: getRandomCertification(),
      },
      center: Math.random() < 0.5,
    };
    rosterData.push(person);
  }
  return rosterData;
};

const getRandomCertification = () => {
  return certifications[Math.floor(Math.random() * certifications.length)];
};
const getColorForCertification = certification => {
  if (certification === 'GND') {
    return '#518f0b'; // Dull green
  } else if (certification === 'TWR') {
    return '#3276b1'; // Dull blue
  } else if (certification === 'APP') {
    return '#ffeb00'; // Dull purple
  }
};

const getRandomInitials = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)];
};

const getRandomRating = () => {
  return Math.floor(Math.random() * 5) + 1;
};

const getCenterColor = center => {
  return center ? '#518f0b' : ''; // Dull green if obtained, empty otherwise
};
const RosterPage = () => {
  const rosterData = generateRandomData();

  return (
    <div>
      <Navigation />
      <Banner imageUrl="https://gcdnb.pbrd.co/images/BDelMphzTTbs.png?o=1" />
      <Container>
        <h1>Roster</h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Initials</th>
              <th>Rating</th>
              <th>Minor</th>
              <th>BWI</th>
              <th>DCA</th>
              <th>IAD</th>
              <th>Center</th>
            </tr>
          </thead>
          <tbody>
            {rosterData.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{getRandomInitials()}</td>
                <td>{getRandomRating()}</td>
                {Object.values(row.positions).map((certification, positionIndex) => (
                  <td key={positionIndex} style={{ backgroundColor: getColorForCertification(certification) }}></td>
                ))}
                <td style={{ backgroundColor: getCenterColor(row.center) }}></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};


export default RosterPage;
