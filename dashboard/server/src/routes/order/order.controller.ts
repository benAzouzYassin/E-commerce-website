import { FastifyReply, FastifyRequest } from "fastify"
import { createOne, getAllOrders, getOrderById, updateStatus } from "./order.service"
import { CreateOrderType,  UpdateOrderType } from "./order.schema"

export async function getAllHandler(req: FastifyRequest, reply: FastifyReply) {
    const { data, error, statusCode } = await getAllOrders()
    reply.status(statusCode).send({ data, error })
}

export async function getOneByIdHandler(req: FastifyRequest, reply: FastifyReply) {
    const orderId = req.params["id"]
    const { data, error, statusCode } = await getOrderById(orderId)
    reply.status(statusCode).send({ data, error })
}

export async function createOneHandler(req: FastifyRequest, reply: FastifyReply) {
    const order = req.body as CreateOrderType
    const creationResult = await createOne(order)
    reply.status(creationResult.error != null ? 500 : 201).send(creationResult)
}

export async function updateOneHandler(req: FastifyRequest, reply: FastifyReply) {
    const updateData = req.body as UpdateOrderType
    const orderId = req.params["id"]
    const updateResult = await updateStatus(updateData?.status  , orderId)
    reply.status(updateResult.error != null ? 500 : 200).send(updateResult)
}