import { FastifyInstance } from "fastify"
import { getAllHandler, getOneByIdHandler } from "./product.controller"

export async function productRouter(server: FastifyInstance) {

    server.get("/getAll", getAllHandler)
    server.get("/getOneById/:id", getOneByIdHandler)
}
