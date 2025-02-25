import React from 'react';

const TeamListItem = ({ team, handleClick }) => {
  const itemStyle = {
    border: '1px solid #000',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const hoverStyle = {
    backgroundColor: '#e0e0e0',
  };

  return (
    <div
      onClick={() => handleClick(team.alias)}
      style={itemStyle}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = itemStyle.backgroundColor)}
    >
      <h3 key={team.id}>{team.market + ' ' + team.name}</h3>
    </div>
  );
};

export default TeamListItem;
