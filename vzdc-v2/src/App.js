import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './HomePage';
import RosterPage from './RosterPage';

const App = () => {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/roster" element={<RosterPage />} />
    </Routes>
    </Router>
     
  );
};
export default App;
