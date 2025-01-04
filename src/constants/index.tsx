import {
  AppNumCategory,
  AppOutOfStock,
  AppStoreValue,
  AppTotalProduct,
} from "@/AppIcon";

export const STORE_KEYS = {
  INVENTORY: "inventory",
  ACCESS_TYPE: "access_type",
};

export const INVENTORY_HEADERS = [
  "Name",
  "Category",
  "Value",
  "Quantity",
  "Price",
  "Actions",
];

export const ROUTES = {
  FETCH_INVENTORY_URL: "inventory",
};

export const BASE_URL = "http://localhost:3000/api/";

export const APP_CARD_INFO: Array<CardType> = [
  {
    title: "Total Product",
    icon: () => <AppTotalProduct />,
    value: 0,
  },
  {
    title: "Total Store Value",
    icon: () => <AppStoreValue />,
    value: 0,
  },
  {
    title: "Out of Stock",
    icon: () => <AppOutOfStock />,
    value: 0,
  },
  {
    title: "No of Category",
    icon: () => <AppNumCategory />,
    value: 0,
  },
];

export const USER_ROLES = {
  ADMIN: "ADMIN",
  USER: "USER",
};

export const ACCESS_TYPES = {
  ADMIN_PAGE: "admin",
  INVENTORY_EDIT: "edit",
  USER_PAGE: "user",
  INVENTORY_VIEW: "view",
};

export const PERMISSIONS = {
  [USER_ROLES.ADMIN]: [ACCESS_TYPES.ADMIN_PAGE, ACCESS_TYPES.INVENTORY_EDIT],
  [USER_ROLES.USER]: [ACCESS_TYPES.USER_PAGE, ACCESS_TYPES.INVENTORY_VIEW],
};
