"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export async function fetchCategories() {
    const backendUrl = process.env["BACKEND_URL"]
    try {
        return await ((await fetch(`${backendUrl}/category/getAll`)).json())
    } catch (error: any) {
        return { data: [], error: error.message }
    }
}

export async function fetchProducts() {
    const backendUrl = process.env["BACKEND_URL"]
    try {
        return await ((await fetch(`${backendUrl}/product/getAll`)).json())
    } catch (error: any) {
        return { data: [], error: error.message }
    }
}

export async function deleteProduct(productId : string) {
    const backendUrl = process.env["BACKEND_URL"]
    try {
        const res = await ((await fetch(`${backendUrl}/product/delete/${productId}` , {method : "delete"})).json())
        if(res){
            revalidatePath("/products")
            redirect("/products?key=" + process.env["SECRET_KEY"])
        }
        return res
    } catch (error: any) {
        return { data: [], error: error.message }
    }
}