import React from "react";
import {
  AppTable,
  AppTableHeader,
  AppTableRow,
  AppTableCell,
} from "@components/AppTable";
import { INVENTORY_HEADERS } from "@/constants";
import { useRecoilValue } from "recoil";
import { InventoryAtom } from "@/AppState";
import TableAction from "./TableAction";

const InventoryTable: React.FC = () => {
  const inventory = useRecoilValue(InventoryAtom);

  const getInventoryItemEntries = (item: Inventory) => {
    const { id, disable, ...rest } = item;
    return Object.entries(rest);
  };

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
            <AppTableRow
              disabled={item.disable}
              key={rowIndex}
              isEven={rowIndex % 2 === 0}
            >
              {getInventoryItemEntries(item).map(([_, value], cellIndex) => (
                <AppTableCell key={cellIndex}>{value}</AppTableCell>
              ))}
              <AppTableCell>
                <TableAction {...item} />
              </AppTableCell>
            </AppTableRow>
          ))}
        </tbody>
      </AppTable>
    </div>
  );
};

export default InventoryTable;
