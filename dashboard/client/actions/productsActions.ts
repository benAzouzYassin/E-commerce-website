"use server"
export async function fetchCategories() {
    const backendUrl = process.env["BACKEND_URL"]
    try {
        return await ((await fetch(`${backendUrl}/category/getAll`)).json())
    } catch (error: any) {
        return { data: null, error: error.message }
    }
}

export async function fetchProducts() {
    const backendUrl = process.env["BACKEND_URL"]
    try {
        return await ((await fetch(`${backendUrl}/product/getAll`)).json())
    } catch (error: any) {
        return { data: null, error: error.message }
    }
}
