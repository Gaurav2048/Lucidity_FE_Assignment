import { InventoryAtom } from "@/AppState";
import AppCard from "@/components/AppCard";
import { APP_CARD_INFO } from "@/constants";
import { currencyConverter } from "@/utils/utils";
import { useMemo } from "react";
import { useRecoilValue } from "recoil";

const NO_ITEM_IN_STORE = 0;

const InventoryStats: React.FC = () => {
  const inventory = useRecoilValue(InventoryAtom);

  const CardDetails = useMemo<Array<CardType>>(() => {
    const totalProduct = inventory.length;
    const totalStoreValue = inventory.reduce(
      (sum, { value }) => sum + currencyConverter(value),
      0,
    );
    const outOfStock = inventory.filter(
      (item) => item.quantity === NO_ITEM_IN_STORE,
    ).length;
    const numCategories = new Set(inventory.map((item) => item.category)).size;

    APP_CARD_INFO[0].value = totalProduct;
    APP_CARD_INFO[1].value = totalStoreValue;
    APP_CARD_INFO[2].value = outOfStock;
    APP_CARD_INFO[3].value = numCategories;
    return APP_CARD_INFO;
  }, [inventory, APP_CARD_INFO]);

  return (
    <div className="flex gap-4 p-8">
      {CardDetails.map((info) => (
        <AppCard
          title={info.title}
          icon={info.icon}
          value={info.value}
          key={info.title}
        />
      ))}
    </div>
  );
};

export default InventoryStats;
