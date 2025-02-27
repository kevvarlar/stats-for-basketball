import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TeamList from './TeamList.jsx';

const Home = () => {
  const [teams, setTeams] = useState([]);
  const navigate = useNavigate();

  const loadTeams = () => {
    axios.get('/teams')
      .then(response => setTeams(response.data))
      .catch(err => navigate('/error'));
  }

  useEffect(loadTeams, []);

  return (
    <div id="home">
      <TeamList teams={teams} loadTeams={loadTeams}/>
    </div>
  );
}

export default Home;