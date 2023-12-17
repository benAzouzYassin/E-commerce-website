"use client"

import { useEffect, useState } from "react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { cn } from "@/utils/styleUtils"
import { Order } from "@/types/globalTypes"

export default function OrderRow({ order }: { order: Order }) {
    const [statusColor, setStatusColor] = useState("")
    const [selectedStatus, setSelectedStatus] = useState(order.status)

    useEffect(() => {
        if (selectedStatus == "waiting") setStatusColor("bg-yellow-200")
        if (selectedStatus == "canceled") setStatusColor("bg-red-300")
        if (selectedStatus == "validated") setStatusColor("bg-blue-300")
        if (selectedStatus == "sended") setStatusColor("bg-green-300")
    }, [selectedStatus, order.status])

    return <tr className="flex justify-center text-center  mt-5 border-2 rounded-2xl shadow-sm font-medium xl p-2 items-center">
        <td className="w-[15vw] flex gap-2 "> <img src={order.product?.imgLink} className="w-10" /><span className="line-clamp-1  text-sm text-center flex items-center">{order.product?.name}</span></td>
        <td className="w-[15vw]">{order.userName}</td>
        <td className="w-[15vw]">{order.userContact}</td>
        <td className="w-[15vw]">{order.location}</td>
        <td className="w-[15vw]">{order?.createdAt?.split("T")[0]}</td>
        <td className="w-[15vw] text-black">
            <Select onValueChange={setSelectedStatus}>
                <SelectTrigger className={cn("w-[180px] relative", statusColor)}>
                    <SelectValue placeholder={order.status} />
                </SelectTrigger>
                <SelectGroup >
                    <SelectContent>
                        <SelectItem defaultChecked value="waiting">Waiting</SelectItem>
                        <SelectItem value="validated">validated</SelectItem>
                        <SelectItem value="sended">sended</SelectItem>
                        <SelectItem value="canceled">canceled</SelectItem>
                    </SelectContent>
                </SelectGroup>
            </Select></td>
    </tr >
}