import { buildJsonSchemas } from "fastify-zod";
import z from "zod";

const CreateOrderSchema = z.object({
    userName: z.string(),
    userContact: z.string(),
    orderPrice: z.number(),
    productId: z.string(),
    isDashboardHidden: z.boolean(),
    status: z.string()
})

export const { $ref, schemas: createOrderSchema } = buildJsonSchemas({ CreateOrderSchema }, { $id: "createOrderSchema" })