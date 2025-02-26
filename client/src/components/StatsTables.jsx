import React from 'react';
import PlayerTotalStatsTables from './PlayerTotalStatsTable.jsx';
import TeamTotalStatsTables from './TeamTotalStatsTable.jsx';
import PlayerAverageStatsTables from './PlayerAverageStatsTable.jsx';
import TeamAverageStatsTables from './TeamAverageStatsTable.jsx';

const StatsTables = ({ stats }) => {
  return (
    <div id="stats">
      <h3 className="text-2xl mb-4 ml-4">Player Stats</h3>
      <h4 className="text-lg mb-2 ml-4">Total Stats</h4>
      <PlayerTotalStatsTables playerStats={stats.players}/>
      <h4 className="text-lg mt-4 mb-2 ml-4">Average Stats</h4>
      <PlayerAverageStatsTables playerStats={stats.players}/>
      <div className="divider my-4"></div>
      <h3 className="text-2xl mb-4 ml-4">Team Stats</h3>
      <h4 className="text-lg mb-2 ml-4">Total Stats</h4>
      <TeamTotalStatsTables teamStats={stats.own_record.total} opponentStats={stats.opponents.total}/>
      <h4 className="text-lg mt-4 mb-2 ml-4">Average Stats</h4>
      <TeamAverageStatsTables teamStats={stats.own_record.average} opponentStats={stats.opponents.average}/>
    </div>
  );
};

export default StatsTables;