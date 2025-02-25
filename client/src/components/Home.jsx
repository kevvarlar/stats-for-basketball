import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeamList from './TeamList.jsx';

const Home = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    axios.get('/teams')
      .then(response => setTeams(response.data))
      .catch(err => alert('Sorry an error occured. Please try again later.'));
  }, [])
  return (
    <div id="home">
      <h1>Welcome to Stats for Basketball</h1>
      <TeamList teams={teams} />
    </div>
  );
}

export default Home;