import React from 'react';

const TeamListItem = ({ team, handleClick, handleFavorite }) => {
  const itemStyle = {
    border: '1px solid #000',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    transition: 'background-color 0.3s ease',
  };

  const hoverStyle = {
    backgroundColor: '#e0e0e0',
  };

  return (
    <div
      style={itemStyle}
    >
      <h3
      onClick={() => handleClick(team.alias)}
      style={itemStyle, {cursor: 'pointer'}}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = itemStyle.backgroundColor)}
      key={team.id}>{team.market + ' ' + team.name}</h3>
      <button
      onClick={() => handleFavorite(team)}
      style={itemStyle, {cursor: 'pointer'}}
      >Mark as Favorite</button>
    </div>
  );
};

export default TeamListItem;
