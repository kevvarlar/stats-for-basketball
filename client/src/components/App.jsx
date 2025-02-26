import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Team from './Team.jsx';
import Page404 from './Page404.jsx';
import ErrorPage from './ErrorPage.jsx';
const App = () => {
  return (
      <div id="app">
        <div className="navbar bg-base-100 shadow-sm">
          <a href="/" className="btn btn-ghost text-3xl">Stats for Basketball</a>
        </div>
        <div className="divider"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:team" element={<Team />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </div>
  );
}

export default App;