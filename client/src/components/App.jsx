import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './Home';
import Team from './Team';
const App = () => {
  return (
      <div id="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:team" element={<Team />} />
        </Routes>
      </div>
  );
}

export default App;