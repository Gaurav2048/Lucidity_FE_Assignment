import React, { ReactNode } from 'react';

interface TableProps {
  children: ReactNode;
}

const AppTable: React.FC<TableProps> = ({ children }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">{children}</table>
    </div>
  );
};

export default AppTable;