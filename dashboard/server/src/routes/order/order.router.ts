import { FastifyInstance } from "fastify"
import { $ref } from "./order.schema"
import { createOneHandler, getAllHandler, getOneByIdHandler, updateOneHandler } from "./order.controller"

export async function orderRouter(server: FastifyInstance) {
    server.get("/getAll",getAllHandler )
    server.get("/getOneById/:id",getOneByIdHandler )
    server.post("/createOne", {
        schema: { body: $ref("CreateOrderSchema") }
    }, createOneHandler)
    server.put("/updateOne/:id" , {
        schema: { body: $ref("UpdateOrderSchema") }
    } , updateOneHandler)
}
