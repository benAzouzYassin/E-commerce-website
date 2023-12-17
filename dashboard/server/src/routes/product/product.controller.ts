import { FastifyReply, FastifyRequest } from "fastify";
import { createNewProduct, getAllProducts, getProductById, updateProduct } from "./product.service";
import { CreateProductBody } from "./product.schema";

export async function getAllHandler(req: FastifyRequest, reply: FastifyReply) {
    const { data, error, statusCode } = await getAllProducts()
    reply.status(statusCode).send({ data, error })
}

export async function getOneByIdHandler(req: FastifyRequest, reply: FastifyReply) {
    const productId = req.params["id"]
    const { data, error, statusCode } = await getProductById(productId)
    reply.status(statusCode).send({ data, error })
}

export async function createOneHandler(req: FastifyRequest, reply: FastifyReply) {
    const newProduct = req.body as CreateProductBody
    const creationResult = await createNewProduct(newProduct)

    reply.status(creationResult.error != null ? 500 : 201).send(creationResult)
}

export async function updateOneHandler(req: FastifyRequest, reply: FastifyReply) {
    const updateData = req.body as CreateProductBody
    const id = req.params["id"]
    const updateResult = await updateProduct(updateData , id)
    reply.status(updateResult.error != null ? 500 : 200).send(updateResult)
}