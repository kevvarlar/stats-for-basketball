import React from 'react';
import Table from '../utils/Table';

const PlayerAverageStatsTable = ({ playerStats }) => {

  const columns = ['Player', 'Pos', 'Min', 'PTS', 'FGM', 'FGA', '2PM', '2PA', '3PM', '3PA', 'FTM', 'FTA', 'OR', 'DR', 'TR', 'AST', 'STL', 'BLK', 'TO', 'PF'];

  const data = playerStats.map(player => ({
    'Player': player.full_name,
    'Pos': player.primary_position,
    'Min': player.average.minutes,
    'PTS': player.average.points,
    'FGM': player.average.field_goals_made,
    'FGA': player.average.field_goals_att,
    '2PM': player.average.two_points_made,
    '2PA': player.average.two_points_att,
    '3PM': player.average.three_points_made,
    '3PA': player.average.three_points_att,
    'FTM': player.average.free_throws_made,
    'FTA': player.average.free_throws_att,
    'OR': player.average.off_rebounds,
    'DR': player.average.def_rebounds,
    'TR': player.average.rebounds,
    'AST': player.average.assists,
    'STL': player.average.steals,
    'BLK': player.average.blocks,
    'TO': player.average.turnovers,
    'PF': player.average.personal_fouls
  }));

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default PlayerAverageStatsTable;