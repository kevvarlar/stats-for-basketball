// import React from 'react';

// const PlayerTable = ({ players }) => {
//   const tableStyle = {
//     borderCollapse: 'collapse',
//     height: '10%',
//     width: '100%'
//   };

//   const thTdStyle = {
//     border: '1px solid black',
//     padding: '2px',
//   };

//   return (
//     <table style={tableStyle}>
//       <caption><h3>Roster</h3></caption>
//       <thead>
//         <tr>
//           <th style={thTdStyle}>Number</th>
//           <th style={thTdStyle}>Name</th>
//           <th style={thTdStyle}>Position</th>
//           <th style={thTdStyle}>Height</th>
//           <th style={thTdStyle}>Weight</th>
//           <th style={thTdStyle}>Birth Date</th>
//           <th style={thTdStyle}>Birth Place</th>
//           <th style={thTdStyle}>Experience</th>
//           <th style={thTdStyle}>College</th>
//         </tr>
//       </thead>
//       <tbody>
//         {players.map((player) => (
//           <tr key={player.id}>
//             <td style={thTdStyle}>{player.jersey_number}</td>
//             <td style={thTdStyle}>{player.full_name}</td>
//             <td style={thTdStyle}>{player.primary_position}</td>
//             <td style={thTdStyle}>{player.height}</td>
//             <td style={thTdStyle}>{player.weight}</td>
//             <td style={thTdStyle}>{player.birthdate}</td>
//             <td style={thTdStyle}>{player.birth_place.split(', ').at(-1)}</td>
//             <td style={thTdStyle}>{player.experience}</td>
//             <td style={thTdStyle}>{player.college}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };
// filepath: /home/kevinvar/stats-for-basketball/client/src/components/PlayerTable.jsx
import React from 'react';
import Table from './utils/Table';

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