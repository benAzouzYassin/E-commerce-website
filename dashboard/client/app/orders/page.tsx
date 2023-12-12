"use client"

import Nav from "@/components/Nav";
import { CalendarDateRangePicker } from "@/components/dashboard/date-range-picker";
import { Select, SelectGroup, SelectItem, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from "@/lib/utils";
import { Flag } from "lucide-react"
import { useEffect, useState } from "react";
export default function Page() {
    const fakeOrder = {
        orderId: "4554",
        productName: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        productImg: "https:\/\/fakestoreapi.com\/img\/81fPKd-2AYL._AC_SL1500_.jpg",
        userName: "yassine",
        userContact: "28348622",
        userLocation: "Tunis",
        orderDate: "2002-11-4",
        orderStatus: "waiting"
    }

    return <main>
        <Nav currentPage="Orders" />
        <section className="px-20 pb-10">
            <h2 className="mt-4 text-6xl font-bold">Orders</h2>
            <div className="flex gap-5 mt-10 ">
                <CalendarDateRangePicker callBack={(date) => console.log(date)} />
                <Select>
                    <SelectTrigger className="w-[180px] relative">
                        <Flag className="absolute ml-16 opacity-70" />
                        <SelectValue placeholder="Status" className="" />
                    </SelectTrigger>
                    <SelectGroup>
                        <SelectContent>
                            <SelectItem value="Waiting">Waiting</SelectItem>
                            <SelectItem value="validated">validated</SelectItem>
                            <SelectItem value="sended">sended</SelectItem>
                            <SelectItem value="canceled">canceled</SelectItem>
                        </SelectContent>
                    </SelectGroup>
                </Select>
            </div>


            <table className=" w-[80vw]">
                <tbody className="relative overflow-scroll ">
                    <tr className="font-medium bg-slate-200 px-5 text-center py-1 rounded-full dark:bg-slate-800 flex mt-10"><th className="w-[15vw]">Product</th><th className="w-[15vw]">Customer</th><th className="w-[15vw]">Contact</th><th className="w-[15vw]">Location</th><th className="w-[15vw]">Date</th><th className="w-[15vw]">Status</th></tr>
                    <OrderRow order={fakeOrder} />
                    <OrderRow order={fakeOrder} />
                    <OrderRow order={fakeOrder} />
                    <OrderRow order={fakeOrder} />
                    <OrderRow order={fakeOrder} />
                    <OrderRow order={fakeOrder} />
                    <OrderRow order={fakeOrder} />
                </tbody>
            </table>
        </section>
    </main>
}


function OrderRow({ order }: { order: any }) {
    const [statusColor, setStatusColor] = useState("")
    const [selectedStatus, setSelectedStatus] = useState(order.orderStatus)

    useEffect(() => {
        if (selectedStatus == "waiting") setStatusColor("bg-yellow-200")
        if (selectedStatus == "canceled") setStatusColor("bg-red-300")
        if (selectedStatus == "validated") setStatusColor("bg-blue-300")
        if (selectedStatus == "sended") setStatusColor("bg-green-300")
    }, [selectedStatus, order.orderStatus])

    return <tr className="flex justify-center text-center  mt-5 border-2 rounded-2xl shadow-sm font-medium xl p-2 items-center">
        <td className="w-[15vw] flex gap-2 "> <img src={order.productImg} className="w-10" /><span className="line-clamp-1  text-sm text-center flex items-center">{order.productName}</span></td>
        <td className="w-[15vw]">{order.userName}</td>
        <td className="w-[15vw]">{order.userLocation}</td>
        <td className="w-[15vw]">{order.userContact}</td>
        <td className="w-[15vw]">{order.orderDate}</td>
        <td className="w-[15vw] text-black">
            <Select onValueChange={setSelectedStatus}>
                <SelectTrigger className={cn("w-[180px] relative", statusColor)}>
                    <SelectValue placeholder={order.orderStatus} />
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