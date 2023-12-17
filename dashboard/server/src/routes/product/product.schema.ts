import { buildJsonSchemas } from "fastify-zod";
import z from "zod";
const CreateProductSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    imgLink: z.string(),
    stock: z.number(),
    orderTimes: z.number().default(0),
    salePrice: z.number(),
    additionalImages: z.array(z.string()),
    status: z.string(),
    categoryId: z.string()
})

export const { $ref, schemas: createProductSchemas } = buildJsonSchemas({ CreateProductSchema }, { $id: "createProductSchema" })

export type CreateProductBody = {
    name: string;
    description: string;
    price: number;
    imgLink: string;
    stock: number;
    orderTimes: number;
    salePrice?: number;
    additionalImages: string[];
    status: string;
    categoryId: string;
};
