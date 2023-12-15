import { prisma } from "../../utils/prisma";

export async function getAllProducts() {
    try {
        const data = await prisma.product.findMany({ include: { category: true } })
        return { data: data, statusCode: 200, error: null }
    } catch (error) {
        return { data: null, statusCode: 500, error: error.message }
    }
}

export async function getProductById(productId: string) {
    try {
        const data = await prisma.product.findFirst({ where: { id: productId }, include: { category: true } })
        return { data: data, statusCode: 200, error: null }
    } catch (error) {
        return { data: null, statusCode: 500, error: error.message }
    }
}