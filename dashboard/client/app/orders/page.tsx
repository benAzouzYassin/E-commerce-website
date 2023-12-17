"use client"

import { fetchAllOrders } from "@/actions/ordersActions";
import Nav from "@/components/Nav";
import OrderRow from "@/components/orders/OrderRow";
import { CalendarDateRangePicker } from "@/components/ui/date-range-picker";
import { Select, SelectGroup, SelectItem, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Order } from "@/types/globalTypes";
import { Flag } from "lucide-react"
import { useEffect, useState } from "react";



export default  function Page() {
    const [orders, setOrders] = useState<Order[]>([])
    useEffect(()=>{
         fetchAllOrders().then((data)=>setOrders(data)).catch(err=>console.error(err)) 
    },[])
    

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
                    {orders.map(order=><OrderRow key={order.id} order={order}/>)}

                </tbody>
            </table>
        </section>
    </main>
}

