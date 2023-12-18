"use client";

import { useCallback, useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { cn } from "@/utils/styleUtils";
import { Order } from "@/types/globalTypes";
import { updateStatus } from "@/actions/ordersActions";
import useSaveStatus from "@/customHooks/useSaveStatus";

export default function OrderRow({ order }: { order: Order }) {
    const [statusColor, setStatusColor] = useState("");
    const [visibleStatus, setVisibleStatus] = useState<string>(order.status);
    const [,setStatus] = useSaveStatus(order.id ?? "", order.status)

    useEffect(() => {
 
        if (visibleStatus === "waiting") setStatusColor("bg-yellow-200");
        if (visibleStatus === "canceled") setStatusColor("bg-red-300");
        if (visibleStatus === "validated") setStatusColor("bg-blue-300");
        if (visibleStatus === "sent") setStatusColor("bg-green-300");
        
    }, [visibleStatus, order.status]);

    return (
        <tr className="flex justify-center text-center  mt-5 border-2 rounded-2xl shadow-sm font-medium xl p-2 items-center">
            <td className="w-[15vw] flex gap-2 ">
                {" "}
                <img src={order.product?.imgLink} className="w-16" />
                <span className="line-clamp-1  text-sm text-center flex items-center">
                    {order.product?.name}
                </span>
            </td>
            <td className="w-[15vw]">{order.userName}</td>
            <td className="w-[15vw]">{order.userContact}</td>
            <td className="w-[15vw]">{order.location}</td>
            <td className="w-[15vw]">{order?.createdAt?.split("T")[0]}</td>
            <td className="w-[15vw] text-black">
                <Select onValueChange={(value)=>{
                    setVisibleStatus(value)
                    setStatus(value)
                    }}>
                    <SelectTrigger
                        className={cn("w-[180px] relative", statusColor)}>
                        <SelectValue placeholder={order.status} />
                    </SelectTrigger>
                    <SelectGroup>
                        <SelectContent>
                            <SelectItem defaultChecked value="waiting">
                                Waiting
                            </SelectItem>
                            <SelectItem value="validated">validated</SelectItem>
                            <SelectItem value="sent">sent</SelectItem>
                            <SelectItem value="canceled">canceled</SelectItem>
                        </SelectContent>
                    </SelectGroup>
                </Select>
            </td>
        </tr>
    );
}
