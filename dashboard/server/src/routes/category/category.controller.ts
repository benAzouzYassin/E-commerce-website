import { FastifyReply, FastifyRequest } from "fastify"
import { createCategory, getCategories } from "./category.service"

export async function getAllHandler(request: FastifyRequest, reply: FastifyReply) {
    try {
        const categoriesData = await getCategories()
        reply.status(200).send({ data: categoriesData, error: null })
    } catch (error) {
        reply.status(500).send({ data: null, error: error.message })
    }
}

export async function createOneHandler(request: FastifyRequest, reply: FastifyReply) {
    //@ts-ignore
    const name = request.body.name ?? ""
    const { error, statusCode } = await createCategory(name)
    reply.status(statusCode).send({ error: error })

}