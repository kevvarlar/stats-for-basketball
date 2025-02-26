import React from 'react';
import { useNavigate } from 'react-router-dom';
import TeamListItem from './TeamListItem.jsx';
const TeamList = ({ teams }) => {
  const navigate = useNavigate();

  const handleClick = (alias) => {
    navigate(`/${alias}`);
  };

  return (
    <div id="team-list">
      <h2>NBA Teams</h2>
        {teams.map(team => (
          <TeamListItem key={team.id} team={team} handleClick={handleClick} />
        ))}
    </div>
  );
};

export default TeamList;