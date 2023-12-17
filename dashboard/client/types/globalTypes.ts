export type DashboardData = {
    revenue: string,
    canceledOrdersCount: string,
    ordersCount: string,
    visits: string,
    lastWeekOrders: any,
    latestOrders: Order[]
}

export type Order = {
    id?: string;
    userName: string;
    userContact: string;
    orderPrice: string;
    productId: string;
    createdAt: string;
    isDashboardHidden: boolean;
    status: string;
    product? : Product
    location : string
};

export type Category = {
    id?: string
    name: string
}
export type Product = {
    id?: string;
    name: string;
    description: string;
    price: string;
    imgLink: string;
    stock: number;
    orderTimes: number;
    salePrice: string;
    additionalImages: string[];
    status: string;
    category: Category
    categoryId: string;
    createdAt: string;
};