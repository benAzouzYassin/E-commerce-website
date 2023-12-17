import { FastifyInstance } from "fastify"
import { createOneHandler, getAllHandler } from "./category.controller"
import { $ref } from "./category.schema"

export async function categoryRouter(server: FastifyInstance) {
    server.get("/getAll", getAllHandler)
    server.post("/createOne", { schema: { body: $ref("CreateCategorySchema") } }, createOneHandler)
}
