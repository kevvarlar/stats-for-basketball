import React from 'react';
import { useNavigate } from 'react-router-dom';
import TeamListItem from './TeamListItem.jsx';
import axios from 'axios';
const TeamList = ({ teams, loadTeams }) => {
  const navigate = useNavigate();
  const handleClick = (alias) => {
    navigate(`/${alias}`);
  };

  const handleFavorite = (team) => {
    axios.post(`/${team.alias}/favorite`)
      .then(response => {
        if (response.status === 204) {
          alert(`${team.name} is now your new favorite team!`);
        } else {
          alert(`${team.name} marked as favorite!`);
        }
        loadTeams();
      })
      .catch(err => {
        alert('Sorry an error occured. Please try again later.');
      });
  }

  return (
    <div id="team-list" className="list bg-base-100 rounded-box shadow-md">
        {teams.map(team => (
            <TeamListItem key={team.id} team={team} handleClick={handleClick} handleFavorite={handleFavorite} />
        ))}
    </div>
  );
};

export default TeamList;