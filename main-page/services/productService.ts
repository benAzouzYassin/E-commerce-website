import { serializeData } from "@/utils/others";
import { prisma } from "@/utils/prisma";
import { Product  } from '@prisma/client';
import { cache } from "react";



export type ProductType = {
    id: string;
    name: string;
    description: string;
    price: number;
    imgLink: string;
    orderTimes: number;
    salePrice: number;
    additionalImages: string[];
    status: string;
    categoryId: string;
    createdAt: Date;
    stock: number;
    Category? : {name : string  , id :string}
}


export const getDividedProducts = cache(async (status?: string, category?: string, price?: string) => {
    // building query  
    const statusCondition = status ?  {status:status}: {}
    const categoryCondition = category ?  {categoryId: category } : {}
    const priceRange = price ? price.split("-") : []
    const priceCondition = price ? {price : {in:  priceRange }}: {}  
    const stockCondition = {stock : {gt : 0}} 
    const where= { where: { ...statusCondition, ...categoryCondition, ...priceCondition , ...stockCondition } };
    
    const products = await prisma.product.findMany({ include: { Category: true } , ...where  })

    const dividedProducts: Array<Product[]> = []
    products?.forEach((item, i) => {
        if (i % 10 === 0) dividedProducts.push([])
        dividedProducts[dividedProducts.length - 1].push(item)
    })
    return serializeData(dividedProducts)
})


export const getProductsGroupedByCategories = cache(async () => {
    const products = await prisma.product.findMany({include : {Category  : true}, where : {stock : {gt : 0}}})
    const categories = await prisma.category.findMany()
    const result = categories.map(category=>{
        const groupedProducts = products.filter(product=>product.categoryId === category.id) 
        return groupedProducts
    })
    return serializeData(result) as Array<ProductType[]>
})

export const getBestSellers = cache(async()=>{
    const bestSellers = await prisma.product.findMany({orderBy : {orderTimes : "asc"} , include : {Category : true} , where : {stock : {gt : 0}} , take : 8})
    return serializeData(bestSellers) as ProductType[]
})