import React from 'react';
import { AppTable, AppTableHeader, AppTableRow, AppTableCell } from '@components/AppTable';

const AdminPage: React.FC = () => {
  const headers = ['Name', 'Age', 'Occupation'];
  const data = [
    ['John Doe', '29', 'Software Engineer'],
    ['Jane Smith', '34', 'Product Manager'],
    ['Sam Johnson', '25', 'Designer'],
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">User Table</h1>
      <AppTable>
        <AppTableHeader>
          {headers.map((header, index) => (
            <AppTableCell key={index}>{header}</AppTableCell>
          ))}
        </AppTableHeader>
        <tbody>
          {data.map((row, rowIndex) => (
            <AppTableRow key={rowIndex} isEven={rowIndex % 2 === 0}>
              {row.map((cell, cellIndex) => (
                <AppTableCell key={cellIndex}>{cell}</AppTableCell>
              ))}
            </AppTableRow>
          ))}
        </tbody>
      </AppTable>
    </div>
  );
};

export default AdminPage;
