import React from 'react';
import { AppTable, AppTableHeader, AppTableRow, AppTableCell } from '@components/AppTable';
import { INVENTORY_HEADERS } from '@/constants';
import { useRecoilValue } from 'recoil';
import { InventoryAtom } from '@/AppState';


const InventoryTable: React.FC = () => {
  const inventory = useRecoilValue(InventoryAtom)

  return (
    <div className="p-8">
      <AppTable>
        <AppTableHeader>
          {INVENTORY_HEADERS.map((header, index) => (
            <AppTableCell key={index}>{header}</AppTableCell>
          ))}
        </AppTableHeader>
        <tbody>
          {inventory?.map((item, rowIndex) => (
            <AppTableRow key={rowIndex} isEven={rowIndex % 2 === 0}>
              {Object.keys(item).map((cell, cellIndex) => (
                <AppTableCell key={cellIndex}>{item[cell as keyof Inventory]}</AppTableCell>
              ))}
            </AppTableRow>
          ))}
        </tbody>
      </AppTable>
    </div>
  );
};

export default InventoryTable;
