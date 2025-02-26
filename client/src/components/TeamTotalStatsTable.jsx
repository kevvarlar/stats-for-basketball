import React from 'react';
import Table from './utils/Table';

const TeamTotalStatsTable = ({ teamStats, opponentStats }) => {

  const columns = ['Team', 'GP', 'Min', 'PTS', 'FGM', 'FGA', 'FG%', '2PM', '2PA', '2P%', '3PM', '3PA', '3P%', 'FTM', 'FTA', 'FT%', 'OR', 'DR', 'TR', 'AST', 'STL', 'BLK', 'TO', 'Fouls'];

  const data = [{
    'Team': 'Own',
    'GP': teamStats.games_played,
    'Min': teamStats.minutes,
    'PTS': teamStats.points,
    'FGM': teamStats.field_goals_made,
    'FGA': teamStats.field_goals_att,
    'FG%': teamStats.field_goals_pct,
    '2PM': teamStats.two_points_made,
    '2PA': teamStats.two_points_att,
    '2P%': teamStats.two_points_pct,
    '3PM': teamStats.three_points_made,
    '3PA': teamStats.three_points_att,
    '3P%': teamStats.three_points_pct,
    'FTM': teamStats.free_throws_made,
    'FTA': teamStats.free_throws_att,
    'FT%': teamStats.free_throws_pct,
    'OR': teamStats.offensive_rebounds,
    'DR': teamStats.defensive_rebounds,
    'TR': teamStats.rebounds,
    'AST': teamStats.assists,
    'STL': teamStats.steals,
    'BLK': teamStats.blocks,
    'TO': teamStats.turnovers,
    'Fouls': teamStats.total_fouls
  }, {
    'Team': 'Opponent',
    'GP': opponentStats.games_played,
    'Min': opponentStats.minutes,
    'PTS': opponentStats.points,
    'FGM': opponentStats.field_goals_made,
    'FGA': opponentStats.field_goals_att,
    'FG%': opponentStats.field_goals_pct,
    '2PM': opponentStats.two_points_made,
    '2PA': opponentStats.two_points_att,
    '2P%': opponentStats.two_points_pct,
    '3PM': opponentStats.three_points_made,
    '3PA': opponentStats.three_points_att,
    '3P%': opponentStats.three_points_pct,
    'FTM': opponentStats.free_throws_made,
    'FTA': opponentStats.free_throws_att,
    'FT%': opponentStats.free_throws_pct,
    'OR': opponentStats.offensive_rebounds,
    'DR': opponentStats.defensive_rebounds,
    'TR': opponentStats.rebounds,
    'AST': opponentStats.assists,
    'STL': opponentStats.steals,
    'BLK': opponentStats.blocks,
    'TO': opponentStats.turnovers,
    'Fouls': opponentStats.total_fouls
  }];

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default TeamTotalStatsTable;