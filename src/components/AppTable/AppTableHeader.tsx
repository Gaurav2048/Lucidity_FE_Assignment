import React, { ReactNode } from "react";

interface TableHeaderProps {
  children: ReactNode;
}

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return (
    <thead className="bg-gray-100">
      <tr>{children}</tr>
    </thead>
  );
};

export default TableHeader;
