declare type Inventory = {
    name: string;
    category: string;
    value: string;
    quantity: number;
    price: string;
}

declare type CardType = {
    title: string;
    icon: () => React.ReactElement;
    value?: number
}