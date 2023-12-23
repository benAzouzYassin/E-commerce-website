"use server"

import { prisma } from "@/utils/prisma"

export async function getCategories(){
    const categories = await prisma.category.findMany()
    return JSON.parse(JSON.stringify(categories))
}
