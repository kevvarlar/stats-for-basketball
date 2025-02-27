import React from 'react';

const TeamListItem = ({ team, handleClick, handleFavorite }) => {

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" onClick={() => handleClick(team.alias)} key={team.id}>{team.market + ' ' + team.name + ' ' + (team.favorite ? '⭐' : '')}</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-ghost"
        onClick={() => handleFavorite(team)}
        disabled={team.favorite}
        >Mark as Favorite</button>
      </div>
    </div>
    <div className="divider"></div>
    </>

  );
};

export default TeamListItem;
