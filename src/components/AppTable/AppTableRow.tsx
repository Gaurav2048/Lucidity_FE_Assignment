import React, { ReactNode } from 'react';

interface TableRowProps {
  children: ReactNode;
  isEven: boolean;
}

const TableRow: React.FC<TableRowProps> = ({ children, isEven }) => {
  return (
    <tr className={`${isEven ? 'bg-white' : 'bg-gray-50'} border-t`}>
      {children}
    </tr>
  );
};

export default TableRow;
