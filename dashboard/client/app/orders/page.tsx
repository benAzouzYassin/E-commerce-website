"use client"

import { fetchAllOrders } from "@/actions/ordersActions";
import Nav from "@/components/Nav";
import OrderRow from "@/components/orders/OrderRow";
import { CalendarDateRangePicker } from "@/components/ui/date-range-picker";
import { Select, SelectGroup, SelectItem, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Order } from "@/types/globalTypes";
import { formatDate } from "@/utils/format";
import { Flag } from "lucide-react"
import { useEffect, useState } from "react";



export default  function Page() {
    const [orders, setOrders] = useState<Order[]>([])
    const [visibleOrders , setVisibleOrders] = useState<Order[]>([])
    const [filterDate , setFilterDate] = useState<Date >(new Date())
    const [statusFilter, setStatusFilter] = useState("")
    
    useEffect(()=>{
         fetchAllOrders().then((data)=>{
            setOrders(data)
            setVisibleOrders(data)
        }).catch(err=>console.error(err)) 
    },[])
    

    useEffect(()=>{
        setVisibleOrders(orders.filter(order=>{
            const orderDate = new Date(order.createdAt)
            return formatDate(orderDate) === formatDate(filterDate)
        }))
    },[filterDate])
  
  
    useEffect(()=>{
        if(statusFilter){
            setVisibleOrders(orders.filter(order=>{
                return order.status === statusFilter
            }))
        }
    },[statusFilter])

    return <main>
        <Nav currentPage="Orders" />
        <section className="px-20 pb-10">
            <h2 className="mt-4 text-6xl font-bold">Orders</h2>
            <div className="flex gap-5 mt-10 ">
                <CalendarDateRangePicker callBack={setFilterDate}  />
                 <Select onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-[180px] relative">
                        <Flag className="absolute ml-16 opacity-70" />
                        <SelectValue placeholder="Status" className="" />
                    </SelectTrigger>
                    <SelectGroup>
                        <SelectContent>
                            <SelectItem value="Waiting">Waiting</SelectItem>
                            <SelectItem value="validated">validated</SelectItem>
                            <SelectItem value="sent">sent</SelectItem>
                            <SelectItem value="canceled">canceled</SelectItem>
                        </SelectContent>
                    </SelectGroup>
                </Select>
            </div>
            <table className=" w-[80vw]">
                <tbody className="relative overflow-scroll ">
                    <tr className="font-medium bg-slate-200 px-5 text-center py-1 rounded-full dark:bg-slate-800 flex mt-10"><th className="w-[12vw]">Product</th><th className="w-[12vw]">Customer</th><th className="w-[12vw]">Contact</th><th className="w-[12vw]">Location</th> <th className="w-[12vw]">Quantity</th><th className="w-[12vw]">Date</th><th className="w-[12vw]">Status</th></tr>
                    {visibleOrders.map(order=><OrderRow key={order.id} order={order}/>)}
                </tbody>
            </table>
        </section>
    </main>
}

