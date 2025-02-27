import React from 'react';
import Table from '../utils/Table';

const PlayerTable = ({ players }) => {
  const columns = [
    'NO', 'Name', 'Pos', 'HT', 'WT', 'DOB', 'POB', 'Exp', 'College'
  ];

  const data = players.map(player => ({
    NO: player.jersey_number,
    Name: player.full_name,
    Pos: player.primary_position,
    HT: player.height,
    WT: player.weight,
    DOB: player.birthdate,
    POB: player.birth_place.split(', ').at(-1),
    Exp: player.experience,
    College: player.college
  }));

  return (
    <div>
      <h3 className="text-2xl mb-4 ml-4">Roster</h3>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default PlayerTable;