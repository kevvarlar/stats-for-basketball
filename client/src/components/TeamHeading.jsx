import React from 'react';

const TeamHeading = ({ team }) => {
  return (
    <div className="team-heading">
      <h1>{team.market + ' ' + team.name + ' ' + (team.favorite ? '⭐' : '')}</h1>
      <h2>Arena: {team.venue.name}</h2>
      <h3>Championships: {team.championships_won}</h3>
      <h3>Mascot: {team.mascot}</h3>
      <h3>Founded: {team.founded}</h3>
      <h3>Conference: {team.conference.name}</h3>
      <h3>Division: {team.division.name}</h3>
      <h3>Coaches: </h3>
      {team.coaches.map(coach => <h4 key={coach.id}>{coach.position + ': ' + coach.full_name}</h4>)}
    </div>
  );
};

export default TeamHeading;