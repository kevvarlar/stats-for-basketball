import React from 'react';

const TeamHeading = ({ team }) => {
  return (
    <div className="team-heading">
      <h1>{team.market + ' ' + team.name}</h1>
      <h3>Championships: {team.championships_won}</h3>
    </div>
  );
};

export default TeamHeading;