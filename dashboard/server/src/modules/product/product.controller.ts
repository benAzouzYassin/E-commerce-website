import { FastifyReply, FastifyRequest } from "fastify";
import { getAllProducts, getProductById } from "./product.service";

export async function getAllHandler(req: FastifyRequest, reply: FastifyReply) {
    const { data, error, statusCode } = await getAllProducts()
    reply.status(statusCode).send({ data, error })
}


export async function getOneByIdHandler(req: FastifyRequest, reply: FastifyReply) {
    const productId = req.params["id"]
    const { data, error, statusCode } = await getProductById(productId)
    reply.status(statusCode).send({ data, error })
}
