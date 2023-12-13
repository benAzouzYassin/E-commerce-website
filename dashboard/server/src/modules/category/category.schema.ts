import { buildJsonSchemas } from "fastify-zod";
import z from "zod";

const CategorySchema = z.object({
    name: z.string().min(2),
    id: z.string().optional()
})

export const { $ref, schemas: categorySchemas } = buildJsonSchemas({ CategorySchema }, { $id: "categorySchemas" })
