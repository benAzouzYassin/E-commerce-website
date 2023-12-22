import { prisma } from "@/utils/prisma";
import { Product } from "@prisma/client";
import { cache } from "react";

export const getDividedProducts = cache(async () => {
    const products = await prisma.product.findMany({ include: { Category: true } });
    const dividedProducts: Array<Product[]> = []
    products.forEach((item, i) => {
        if (i % 10 === 0) dividedProducts.push([])
        dividedProducts[dividedProducts.length - 1].push(item)
    })
    return dividedProducts
})

export const getCategories = cache(async()=>{
    const categories = await prisma.category.findMany()
    return categories
})


export const getProductsByCategories = cache(async()=>{
    const products = await prisma.product.findMany()
    const result: Record<string, Product[]> = {}
})