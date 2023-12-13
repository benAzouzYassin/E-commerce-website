import { FastifyReply, FastifyRequest } from "fastify";
import { getCanceledOrdersCount, getLastWeekOrders, getOrdersCount, getTotalRevenue, getVisitsCount } from "./dashboard.service";

export async function getDataHandler(req: FastifyRequest, reply: FastifyReply) {
    // get the total revenue
    try {

        const revenue = await getTotalRevenue()
        const ordersCount = await getOrdersCount()
        const canceledOrdersCount = await getCanceledOrdersCount()
        const visits = await getVisitsCount()
        const lastWeekOrders = await getLastWeekOrders()
        reply.send({ revenue, canceledOrdersCount, ordersCount, visits, lastWeekOrders })
    } catch (err) {
        //TODO handle this error
        reply.status(500).send({})
    }
}