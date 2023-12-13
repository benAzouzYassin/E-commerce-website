import { prisma } from "../../utils/prisma";

export async function getCategories() {
    const categories = await prisma.category.findMany()
    return categories.map(category => category.name)

}

export async function createCategory(name: string) {
    const oldCategories = await getCategories()
    if (oldCategories.indexOf(name) != -1) return { error: "category exists !", statusCode: 400 }
    try {
        const newCategory = await prisma.category.create({ data: { name: name } })
        if (newCategory) return { error: null, statusCode: 201 }
    } catch (error) {
        return { error: "database error", statusCode: 500 }
    }
}