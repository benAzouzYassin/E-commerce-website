"use server"

import { prisma } from "@/utils/prisma"


//TODO optimize this

type OrderActionType = {
    userName: string,
    products: { productId: string, quantity: number }[],
    userContact: string,
    location: string
}




export async function OrderItems(data: OrderActionType) {
    try {
        const orders = []
        for (const { productId, quantity } of data.products) {
            const product = await prisma.product.findFirst({ where: { id: productId } })
            if (!product) throw new Error("Wrong product id in trace : actions/orderingActions.ts on line 20!")
            const orderData = {
                isDashboardHidden: false,
                location: data.location,
                orderPrice: product.status === "on sale" ? product.salePrice : product.price,
                productQuantity: quantity,
                status: "waiting",
                userContact: data.userContact,
                userName: data.userName,
                id: crypto.randomUUID(),
                productId: productId
            }
            orders.push(orderData)
        }
        const createdOrders = await prisma.order.createMany({ data: orders })
        return { data: createdOrders, error: null }
    } catch (error : any) {
        return { data: null, error: error?.message ?? "Error creating orders"  }
        
    }
}
