import React from 'react';

const TeamListItem = ({ team, handleClick }) => {
  return (
    <div onClick={() => handleClick(team.alias)} className="team-list-item">
      <h3 key={team.id}>{team.market + ' ' + team.name}</h3>
    </div>
  );
};

export default TeamListItem;
