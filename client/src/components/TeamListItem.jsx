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

/*
<div class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg>
    </button>
  </div>
</div>
*/
export default TeamListItem;
