import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeamList from './TeamList.jsx';

const Home = () => {
  const [teams, setTeams] = useState([]);
  const loadTeams = () => {
    axios.get('/teams')
      .then(response => setTeams(response.data))
      .catch(err => alert('Sorry an error occured. Please try again later.'));
  }
  useEffect(loadTeams, [])
  return (
    <div id="home">
      <h1 className="text-4xl text-blue-700">Welcome to Stats for Basketball</h1>
      <div className="divider"></div>
      <TeamList teams={teams} loadTeams={loadTeams}/>
    </div>
  );
}

export default Home;