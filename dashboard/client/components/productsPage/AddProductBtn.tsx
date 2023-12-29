"use client"

import useSecretKey from "@/customHooks/useSecretKey"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function AddProductBtn() {
    const router = useRouter()
   const secretKey = useSecretKey() 
   const [isLoading , setIsLoading] = useState(false)

   const handleClick = ()=> {
    setIsLoading(true)
    router.push(`/addProduct?key=${secretKey}`)
   }

    return <button onClick={handleClick} className=" ml-10 border-2 px-3 rounded-md dark:font-normal font-medium border-foreground   before:ease relative  overflow-hidden py-2   transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-foreground before:opacity-10 before:duration-700  hover:before:-translate-x-40">
       {isLoading ? <Loader2 className="animate-spin mx-auto"/>  : "Add new product +"}
    </button>
}