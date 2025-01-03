import { AppNumCategory, AppOutOfStock, AppStoreValue, AppTotalProduct } from "@/AppIcon"

export const STORE_KEYS = {
    INVENTORY: "inventory"
}

export const INVENTORY_HEADERS = ["Name", "Category", "Price", "Quantity", "Value", "Actions"]

export const ROUTES = {
    FETCH_INVENTORY_URL: "inventory"
}

export const BASE_URL = "http://localhost:3000/api/"

export const APP_CARD_INFO: Array<CardType> = [
    {
        title: "Total Product",
        icon: () => <AppTotalProduct />,
        value: 0
    },
    {
        title: "Total Store Value",
        icon: () => <AppStoreValue />,
        value: 0
    },
    {
        title: "Out of Stock",
        icon: () => <AppOutOfStock />,
        value: 0
    },
    {
        title: "No of Category",
        icon: () => <AppNumCategory />,
        value: 0
    }
]