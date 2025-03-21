import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import PlayerTable from './PlayerTable.jsx';
import StatsTables from './StatsTables.jsx';
import TeamHeading from './TeamHeading.jsx';
const Team = () => {
  const navigate = useNavigate();
  const { team } = useParams();
  const [roster, setRoster] = useState(null);
  const [stats, setStats] = useState(null);
  let location = useLocation();
  const id = location.state;
  useEffect(() => {
    if (!id) {
      navigate('/404');
      return;
    }
    axios.get(`/api/team?team=${team}&id=${id.id}`)
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
        navigate('/error');
      });
  }, [])
  return (
  <>
    {roster ?
    <div id="team">
      <TeamHeading team={roster} />
      <div className="divider my-4"></div>
      <PlayerTable players={roster.players} />
      <div className="divider my-4"></div>
      <StatsTables stats={stats} />
    </div>
    : <div>Loading...</div>}
  </>
);
}

export default Team;