import { buildJsonSchemas } from "fastify-zod";
import z from "zod";

const CreateCategorySchema = z.object({
    name: z.string().min(2),
})

export const { $ref, schemas: createCategorySchemas } = buildJsonSchemas({ CreateCategorySchema }, { $id: "createCategorySchema" })
