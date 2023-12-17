import { FastifyReply, FastifyRequest } from "fastify";
import { getCanceledOrdersCount, getLastWeekOrders, getLatestOrders, getOrdersCount, getTotalRevenue } from "./dashboard.service";
import { getVisitsCount } from "./dashboard.service"

export async function getDataHandler(req: FastifyRequest, reply: FastifyReply) {
    // get the total revenue
    try {

        const revenue = await getTotalRevenue()
        const ordersCount = await getOrdersCount()
        const canceledOrdersCount = await getCanceledOrdersCount()
        const visits = await getVisitsCount()
        const lastWeekOrders = await getLastWeekOrders()
        const latestOrders = await getLatestOrders()
        reply.send({ data: { revenue, canceledOrdersCount, ordersCount, visits, lastWeekOrders, latestOrders }, error: null })

    } catch (err) {
        reply.status(500).send({ error: err.message, data: null })
    }
}
