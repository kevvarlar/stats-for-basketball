import React from 'react';
import Table from '../utils/Table';

const PlayerTotalStatsTable = ({ playerStats }) => {
  const columns = ['Player', 'Pos', 'GP', 'GS', 'Min', 'PTS', 'FGM', 'FGA', 'FG%', '2PM', '2PA', '2P%', '3PM', '3PA', '3P%', 'FTM', 'FTA', 'FT%', 'OR', 'DR', 'TR', 'AST', 'STL', 'BLK', 'TO', 'PF'];

  const data = playerStats.map(player => ({
    'Player': player.full_name,
    'Pos': player.primary_position,
    'GP': player.total.games_played,
    'GS': player.total.games_started,
    'Min': player.total.minutes,
    'PTS': player.total.points,
    'FGM': player.total.field_goals_made,
    'FGA': player.total.field_goals_att,
    'FG%': player.total.field_goals_pct,
    '2PM': player.total.two_points_made,
    '2PA': player.total.two_points_att,
    '2P%': player.total.two_points_pct,
    '3PM': player.total.three_points_made,
    '3PA': player.total.three_points_att,
    '3P%': player.total.three_points_pct,
    'FTM': player.total.free_throws_made,
    'FTA': player.total.free_throws_att,
    'FT%': player.total.free_throws_pct,
    'OR': player.total.offensive_rebounds,
    'DR': player.total.defensive_rebounds,
    'TR': player.total.rebounds,
    'AST': player.total.assists,
    'STL': player.total.steals,
    'BLK': player.total.blocks,
    'TO': player.total.turnovers,
    'PF': player.total.personal_fouls
  }));

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default PlayerTotalStatsTable;