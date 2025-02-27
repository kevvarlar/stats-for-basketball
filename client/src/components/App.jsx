import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './Home/Home.jsx';
import Team from './Team/Team.jsx';
import Page404 from './404/Page404.jsx';
import ErrorPage from './Error/ErrorPage.jsx';
import NavBar from './NavBar.jsx';
const App = () => {
  return (
      <div id="app">
        <NavBar/>
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