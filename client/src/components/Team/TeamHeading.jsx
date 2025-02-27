import React from 'react';

const TeamHeading = ({ team }) => {
  return (
    <div id="team-heading">
      <h1 className="text-5xl font-bold mb-4 ml-4">{team.market + ' ' + team.name + ' ' + (team.favorite ? '⭐' : '')}</h1>
      <h2 className="text-3xl mb-4 ml-4">Arena: {team.venue.name}</h2>
      <h3 className="text-xl mb-4 ml-4">Championships: {team.championships_won}</h3>
      <h3 className="text-xl mb-4 ml-4">Mascot: {team.mascot}</h3>
      <h3 className="text-xl mb-4 ml-4">Founded: {team.founded}</h3>
      <h3 className="text-xl mb-4 ml-4">Conference: {team.conference.name}</h3>
      <h3 className="text-xl mb-4 ml-4">Division: {team.division.name}</h3>
      <h3 className="text-xl mb-4 ml-4">Coaches: </h3>
      {team.coaches.map(coach => (
        <h4 key={coach.id} className="text-lg mb-2 ml-8">{coach.position + ': ' + coach.full_name}</h4>
      ))}
    </div>
  );
};

export default TeamHeading;