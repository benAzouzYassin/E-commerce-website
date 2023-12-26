"use server"
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
        return await ((await fetch(`${backendUrl}/product/delete/${productId}` , {method : "delete"})).json())
    } catch (error: any) {
        return { data: [], error: error.message }
    }
}