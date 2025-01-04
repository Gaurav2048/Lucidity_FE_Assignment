import React, { ReactNode } from 'react';

interface TableCellProps {
  children: ReactNode;
}

const TableCell: React.FC<TableCellProps> = ({ children }) => {
  return (
    <td className="px-4 py-2 text-gray-700">{children}</td>
  );
};

export default TableCell;
