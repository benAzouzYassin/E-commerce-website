"use client"

import { updateStatus } from "@/actions/ordersActions";
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";

type ReturnType = [string ,Dispatch<SetStateAction<string>>]



export default function useSaveStatus(orderId : string , defaultStatus : string) : ReturnType  {
    const [status, setStatus] = useState("waiting");

    const saveNewStatus=useCallback((newStatus : string)=>{
        // the status waiting is the default status
        const possibleStatus = ["canceled","validated","sent"]  
        if(possibleStatus.indexOf(newStatus) !== -1){
            updateStatus(orderId ?? "", newStatus)
            .then(data=>console.log(data))
            .catch(err=>setStatus(defaultStatus))
        }else{
            console.error("not valid order status")
        }
    } , [orderId , defaultStatus])

    useEffect(() => {
        const timeoutId = setTimeout(()=>saveNewStatus(status),100) 
        return ()=>clearTimeout(timeoutId)
    }

    , [saveNewStatus, status]);
    return [status , setStatus];
  }
