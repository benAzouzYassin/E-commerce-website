"use server"
import { Order } from "@/types/globalTypes"
import axios from "axios"
import { revalidatePath } from "next/cache"

export async function fetchAllOrders() {
        //error handling is done in the client side    
        const { data: response } = await axios.get(process.env["BACKEND_URL"] + "/order/getAll")
        return response.data as Order[] ?? []
}

export async function updateStatus(orderId: string, status: string) {
        //error handling is done in the client side    
        const { data: response } = await axios.put(process.env["BACKEND_URL"] + `/order/updateOne/${orderId}`, {status})
        revalidatePath("/")
        return   response?.data
}