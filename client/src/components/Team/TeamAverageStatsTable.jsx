import React from 'react';
import Table from '../utils/Table';

const TeamAverageStatsTable = ({ teamStats, opponentStats }) => {
  const columns = ['Team','Min', 'PTS', 'FGM', 'FGA', '2PM', '2PA', '3PM', '3PA', 'FTM', 'FTA', 'OR', 'DR', 'TR', 'AST', 'STL', 'BLK', 'TO', 'PF'];

  const data = [{
    'Team': 'Own',
    'Min': teamStats.minutes,
    'PTS': teamStats.points,
    'FGM': teamStats.field_goals_made,
    'FGA': teamStats.field_goals_att,
    '2PM': teamStats.two_points_made,
    '2PA': teamStats.two_points_att,
    '3PM': teamStats.three_points_made,
    '3PA': teamStats.three_points_att,
    'FTM': teamStats.free_throws_made,
    'FTA': teamStats.free_throws_att,
    'OR': teamStats.off_rebounds,
    'DR': teamStats.def_rebounds,
    'TR': teamStats.rebounds,
    'AST': teamStats.assists,
    'STL': teamStats.steals,
    'BLK': teamStats.blocks,
    'TO': teamStats.turnovers,
    'PF': teamStats.personal_fouls
  }, {
    'Team': 'Opponent',
    'Min': opponentStats.minutes,
    'PTS': opponentStats.points,
    'FGM': opponentStats.field_goals_made,
    'FGA': opponentStats.field_goals_att,
    '2PM': opponentStats.two_points_made,
    '2PA': opponentStats.two_points_att,
    '3PM': opponentStats.three_points_made,
    '3PA': opponentStats.three_points_att,
    'FTM': opponentStats.free_throws_made,
    'FTA': opponentStats.free_throws_att,
    'OR': opponentStats.off_rebounds,
    'DR': opponentStats.def_rebounds,
    'TR': opponentStats.rebounds,
    'AST': opponentStats.assists,
    'STL': opponentStats.steals,
    'BLK': opponentStats.blocks,
    'TO': opponentStats.turnovers,
    'PF': opponentStats.personal_fouls
  }];

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default TeamAverageStatsTable;