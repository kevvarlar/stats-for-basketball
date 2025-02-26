import React from 'react';

const Table = ({ columns, data }) => {
  const tableStyle = {
    borderCollapse: 'collapse',
    height: '0.35em',
    width: 'auto'
  };

  const thTdStyle = {
    border: '1px solid black',
    padding: '2px',
  };
  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} style={thTdStyle}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex} style={thTdStyle}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;