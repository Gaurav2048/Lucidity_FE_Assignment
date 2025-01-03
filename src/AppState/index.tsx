import { STORE_KEYS } from "@/constants";
import { atom } from "recoil";

const InventoryAtom = atom<Array<Inventory>>({
    key: STORE_KEYS.INVENTORY,
    default: []
})

export {
    InventoryAtom
}