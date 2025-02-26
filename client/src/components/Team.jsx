import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import PlayerTable from './PlayerTable.jsx';
import StatsTables from './StatsTables.jsx';
import TeamHeading from './TeamHeading.jsx';
const Team = () => {
  const navigate = useNavigate();
  const { team } = useParams();
  const [roster, setRoster] = useState(null);
  const [stats, setStats] = useState(null);
  useEffect(() => {
    axios.get('/team?team=' + team)
      .then(response => {
        setRoster(response.data.roster)
        setStats(response.data.stats)
      })
      .catch(err => {
        if (err.response.status === 404) {
          navigate('/404');
          return;
        }
        alert('Sorry an error occured. Please try again later.');
        navigate('/');
      });
  }, [])
  return (
  <>
    {roster ?
    <div id="team">
      <TeamHeading team={roster} />
      <br/>
      <PlayerTable players={roster.players} />
      <br/>
      <br/>
      <StatsTables stats={stats} />
    </div>
    : <div>Loading...</div>}
    <br/>
    <Link to="/">Go Back</Link>
  </>
);
}

export default Team;