import { buildJsonSchemas } from "fastify-zod";
import z from "zod";

const CreateOrderSchema = z.object({
    userName: z.string(),
    userContact: z.string(),
    orderPrice: z.number(),
    productId: z.string(),
    location : z.string()
})

const UpdateOrderSchema = z.object({
    status : z.string(),
})

export const { $ref, schemas: createOrderSchemas } = buildJsonSchemas({ CreateOrderSchema , UpdateOrderSchema }, { $id: "orderSchemas" })

export type CreateOrderType = {
    userName : string
    userContact : string
    orderPrice : string
    productId: string
    location : string
}
export type UpdateOrderType = {
    status : string
    productId : string
}