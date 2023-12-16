// MyTable.tsx

import React, { ReactNode } from 'react';
import './MyTable.css';

export interface MyTableProps {
  headers: string[];
  data: ReactNode[][];
}

const MyTable: React.FC<MyTableProps> = ({ headers, data }) => {
  return (
    <table className="my-table">
      <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
      </thead>
      <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <td key={cellIndex}>{cell}</td>
          ))}
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default MyTable;
