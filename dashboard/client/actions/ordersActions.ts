"use server"   
import { Order } from "@/types/globalTypes"
import axios from "axios"

export async function fetchAllOrders() {
        //error catching is done in the client side    
        const {data : response  } = await axios.get(process.env["BACKEND_URL"] + "/order/getAll")
        return response.data  as Order[]
}
