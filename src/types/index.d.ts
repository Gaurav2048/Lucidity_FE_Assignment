declare type Inventory = {
    id: string;
    name: string;
    category: string;
    value: string;
    quantity: number;
    disable: boolean;
    price: string;
}

declare type InventoryForm = {
    id: string;
    name: string;
    category: string;
    value: number;
    quantity: number;
    disable: boolean;
    price: number;
}

declare type CardType = {
    title: string;
    icon: () => React.ReactElement;
    value?: number
}

declare type AccessType = "ADMIN" | "USER"