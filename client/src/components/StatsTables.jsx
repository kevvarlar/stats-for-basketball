import React from 'react';
import PlayerTotalStatsTables from './PlayerTotalStatsTable.jsx';
import TeamTotalStatsTables from './TeamTotalStatsTable.jsx';
import PlayerAverageStatsTables from './PlayerAverageStatsTable.jsx';
import TeamAverageStatsTables from './TeamAverageStatsTable.jsx';

const StatsTables = ({ stats }) => {
  return (
    <>
      <h3>Player Stats</h3>
      <h4>Total Stats</h4>
      <PlayerTotalStatsTables playerStats={stats.players}/>
      <br/>
      <h4>Average Stats</h4>
      <PlayerAverageStatsTables playerStats={stats.players}/>
      <br/>
      <br/>
      <h3>Team Stats</h3>
      <h4>Total Stats</h4>
      <TeamTotalStatsTables teamStats={stats.own_record.total} opponentStats={stats.opponents.total}/>
      <br/>
      <h4>Average Stats</h4>
      <TeamAverageStatsTables teamStats={stats.own_record.average} opponentStats={stats.opponents.average}/>
    </>
  );
};

export default StatsTables;