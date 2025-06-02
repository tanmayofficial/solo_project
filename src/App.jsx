import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import EventDetails from './components/EventDetails';
import Events from './components/Events';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<EventDetails />} />
          <Route path="/events-requests" element={<Events />} />
          <Route path="/new-requests" element={<EventDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;