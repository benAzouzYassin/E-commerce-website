import { prisma } from "../../utils/prisma";
import { CreateProductBody } from "./product.schema";

export async function getAllProducts() {
    try {
        const data = await prisma.product.findMany({ include: { category: true } , where : {NOT : {status : "deleted"}} })
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

async function verifyCategoryId(categoryId: string) {
    const category = await prisma.category.findFirst({ where: { OR: [{ id: categoryId }, { name: categoryId }] } })
    if (!category) {
        const newCategory = await prisma.category.create({ data: { name: categoryId } })
        return newCategory.id
    }
    if (category) return category.id
}

export async function createNewProduct(newProduct: CreateProductBody) {
    try {
        // verify if category exists or create new one 
        const verifiedCategoryId = await verifyCategoryId(newProduct.categoryId)
        newProduct.categoryId = verifiedCategoryId
        const createdProduct = await prisma.product.create({
            data: {
                name: newProduct.name,
                description: newProduct.description,
                price: newProduct.price,
                imgLink: newProduct.imgLink,
                stock: newProduct.stock,
                orderTimes: newProduct.orderTimes ?? 0,
                salePrice: newProduct.salePrice,
                additionalImages: newProduct.additionalImages || [],
                status: newProduct.status,
                categoryId: newProduct.categoryId,
            }
        });
        if (createdProduct) {
            return { data: "created successfully !", error: null }
        } else {
            return { data: null, error: "error while creating product !" }

        }

    } catch (error) {
        return { data: null, error: error.message }

    }
}


export async function updateProduct(productData: CreateProductBody , productId : string) {
    try {
        // verify if category exists or create new one 
        const verifiedCategoryId = await verifyCategoryId(productData.categoryId)
        productData.categoryId = verifiedCategoryId
        const createdProduct = await prisma.product.update({where : {id : productId} , data : {
            name: productData.name,
            description: productData.description,
            price: productData.price,
            imgLink: productData.imgLink,
            stock: productData.stock,
            orderTimes: productData.orderTimes ?? 0,
            salePrice: productData.salePrice,
            additionalImages: productData.additionalImages || [],
            status: productData.status,
            categoryId: productData.categoryId,
        }});
        if (createdProduct) {
            return { data: "updated successfully !", error: null }
        } else {
            return { data: null, error: "error while updating product !" }

        }

    } catch (error) {
        return { data: null, error: error.message }

    }
}
export async function deleteProduct(id : string) {
    try {
        const data = await prisma.product.update( {data : {stock : 0 ,  status : "deleted" }, where : {id : id }} )
        return { data: data, statusCode: 200, error: null }
    } catch (error) {
        return { data: null, statusCode: 500, error: error.message }
    }
}