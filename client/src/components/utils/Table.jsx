import React from 'react';

const Table = ({ columns, data }) => {
  return (
    <div className="overflow-y-auto rounded-box border border-base-content/5 bg-base-100" style={{ maxHeight: '500px'}}>
      <table className="table table-zebra">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
