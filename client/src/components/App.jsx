import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Team from './Team.jsx';
import Page404 from './Page404.jsx';
const App = () => {
  return (
      <div id="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:team" element={<Team />} />
          <Route path="/404" element={<Page404 />} />
        </Routes>
      </div>
  );
}

export default App;