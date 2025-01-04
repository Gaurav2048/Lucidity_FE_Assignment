import { STORE_KEYS } from "@/constants";
import { atom } from "recoil";

const InventoryAtom = atom<Array<Inventory>>({
  key: STORE_KEYS.INVENTORY,
  default: [],
});

const AccessTypeAtom = atom<AccessType>({
  key: STORE_KEYS.ACCESS_TYPE,
  default: "ADMIN",
});

export { InventoryAtom, AccessTypeAtom };
