import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TeamList from './TeamList.jsx';

const Home = () => {
  const [teams, setTeams] = useState([]);
  const navigate = useNavigate();

  const loadTeams = () => {
    axios.get('/api/teams')
      .then(response => setTeams(response.data))
      .catch(err => navigate('/error'));
  }

  useEffect(loadTeams, []);

  return (
    <>
      <div role="alert" className="alert alert-info">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>Click on a team to view their roster and stats!</span>
      </div>
      <div className="divider"></div>
      <div id="home">
        <TeamList teams={teams} loadTeams={loadTeams}/>
      </div>
    </>
  );
}

export default Home;