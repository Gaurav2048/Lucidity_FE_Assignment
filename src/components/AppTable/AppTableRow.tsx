import React, { ReactNode } from "react";

interface TableRowProps {
  children: ReactNode;
  isEven: boolean;
  disabled: boolean;
}

const TableRow: React.FC<TableRowProps> = ({ children, isEven, disabled }) => {
  const bgColor = disabled ? "bg-gray-200" : isEven ? "bg-white" : "bg-gray-50";

  return <tr className={`${bgColor} border-t`}>{children}</tr>;
};

export default TableRow;
