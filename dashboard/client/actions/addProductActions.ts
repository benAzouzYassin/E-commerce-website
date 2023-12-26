"use server"


import { uploadProductImage } from "@/utils/firebase"
import axios from "axios"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export async function createNewProduct(data: FormData) {
    const status = data.get("productStatus")?.toString() ?? ""
    const category = data.get("productCategory")?.toString() ?? ""
    const name = data.get("productName")?.toString() ?? ""
    const description = data.get("productDescription")?.toString() ?? ""
    const price = data.get("productPrice")?.toString() ?? ""
    const salePrice = data.get("productSalePrice")?.toString() ?? ""
    const stock = data.get("productStock")?.toString() ?? ""
    const imgFile = data.get("productImg")
   
    
    const imgLink = await uploadProductImage(imgFile)
    const newProduct = {
        additionalImages: [],
        description: description,
        imgLink: imgLink,
        name: name,
        price: Number(price),
        orderTimes: 0,
        salePrice: salePrice ? Number(salePrice) : 0,
        status: status,
        categoryId: category,
        stock: Number(stock)
    }
    try {
        const response = await axios.post(process.env["BACKEND_URL"] + "/product/createOne", newProduct)
        
    } catch (error: any) {
    }
    revalidatePath("/products")
    redirect("/products")
}



export async function fetchCategories() {
    const backendUrl = process.env["BACKEND_URL"]
    try {
        return await ((await fetch(`${backendUrl}/category/getAll`, { cache: "no-cache" })).json())
    } catch (error: any) {
        return { data: [], error: error.message }
    }
}
