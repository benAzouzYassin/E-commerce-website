
type DashboardData = {
    revenue: string,
    canceledOrdersCount: string,
    ordersCount: string,
    visits: string,
    lastWeekOrders: any,
    latestOrders: any[]
}
// /Dashboard/data
export type DashboardDataRoute = {
    data: DashboardData | null,
    error: string | null
}

