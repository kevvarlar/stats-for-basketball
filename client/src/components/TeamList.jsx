import React from 'react';
import { useNavigate } from 'react-router-dom';
import TeamListItem from './TeamListItem.jsx';
import axios from 'axios';
const TeamList = ({ teams }) => {
  const navigate = useNavigate();

  const handleClick = (alias) => {
    navigate(`/${alias}`);
  };

  const handleFavorite = (team) => {
    axios.post(`/${team.alias}/favorite`)
      .then(response => {
        alert(`${team.name} marked as favorite!`);
      })
      .catch(err => {
        alert('Sorry an error occured. Please try again later.');
      });
  }

  return (
    <div id="team-list">
      <h2>NBA Teams</h2>
        {teams.map(team => (
          <TeamListItem key={team.id} team={team} handleClick={handleClick} handleFavorite={handleFavorite} />
        ))}
    </div>
  );
};

export default TeamList;