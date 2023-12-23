import { prisma } from "@/utils/prisma";
import { Prisma, Product } from "@prisma/client";
import { cache } from "react";



export const getDividedProducts = cache(async (status?: string, category?: string, price?: string) => {
    // building query  
    const statusCondition = status ?  {status:status}: {}
    const categoryCondition = category ?  {categoryId: category } : {}
    const priceRange = price ? price.split("-") : []
    const priceCondition = price ? {price : {in:  priceRange }}: {}  
    const where= { where: { ...statusCondition, ...categoryCondition, ...priceCondition } };
    
    const products = await prisma.product.findMany({ include: { Category: true } , ...where  })

    const dividedProducts: Array<Product[]> = []
    products?.forEach((item, i) => {
        if (i % 10 === 0) dividedProducts.push([])
        dividedProducts[dividedProducts.length - 1].push(item)
    })
    return JSON.parse(JSON.stringify(dividedProducts))
})


export const getProductsByCategories = cache(async () => {
    const products = await prisma.product.findMany()
    const result: Record<string, Product[]> = {}
})