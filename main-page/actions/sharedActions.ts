"use server"

import { prisma } from "@/utils/prisma"
import { Category } from "@prisma/client"

export async function getCategories(){
    const categories = await prisma.category.findMany({orderBy : {name : "asc"}})
    return JSON.parse(JSON.stringify(categories)) as Category[]
}
