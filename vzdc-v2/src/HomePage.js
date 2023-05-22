import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from './Banner';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import MainFeed from './MainFeed';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Navigation />
      <Container className="main-container">
        <Row>
          <Sidebar />
          <MainFeed />
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
