import { buildJsonSchemas } from "fastify-zod";
import z from "zod";

const ProductSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    imgLink: z.string(),
    stock: z.number(),
    orderTimes: z.number(),
    salePrice: z.number(),
    additionalImages: z.array(z.string()),
    status: z.string(),
    categoryId: z.string()
})

export const { $ref, schemas: productSchemas } = buildJsonSchemas({ ProductSchema }, { $id: "productSchemas" })
