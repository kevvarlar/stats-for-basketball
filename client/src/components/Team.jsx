import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PlayerTable from './PlayerTable.jsx';
const Team = () => {
  const navigate = useNavigate();
  const { team } = useParams();
  const [currentTeam, setCurrentTeam] = useState(null);
  useEffect(() => {
    axios.get('/team?team=' + team)
      .then(response => {
        setCurrentTeam(response.data)
      })
      .catch(err => console.error(err));
  }, [])
  return (
  <>
    {currentTeam ?
    <div id="team">
      <h2>{currentTeam.market + ' ' + currentTeam.name}</h2>
      <PlayerTable players={currentTeam.players} />
    </div>
    : <div>Loading...</div>}
    <button onClick={() => {
      navigate('/')
    }}>Go Back</button>
  </>
);
}

export default Team;