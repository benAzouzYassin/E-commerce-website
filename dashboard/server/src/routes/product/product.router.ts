import { FastifyInstance } from "fastify"
import { createOneHandler, deleteOneHandler, getAllHandler, getOneByIdHandler, updateOneHandler } from "./product.controller"
import { $ref } from "./product.schema"

export async function productRouter(server: FastifyInstance) {
    server.get("/getAll", getAllHandler)
    server.get("/getOneById/:id", getOneByIdHandler)
    server.post("/createOne", {
        schema: { body: $ref("CreateProductSchema") }
    }, createOneHandler)
    server.put("/updateOne/:id" , {
        schema: { body: $ref("CreateProductSchema") }
    } , updateOneHandler)
    server.delete("/delete/:id" , deleteOneHandler)
}
