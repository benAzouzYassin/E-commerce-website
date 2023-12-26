"use client"

import useSecretKey from "@/customHooks/useSecretKey"
import Link from "next/link"

export default function AddProductBtn() {
   const secretKey = useSecretKey() 
    return <button className=" ml-10 border-2 px-3 rounded-md dark:font-normal font-medium border-foreground   before:ease relative  overflow-hidden py-2   transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-foreground before:opacity-10 before:duration-700  hover:before:-translate-x-40">
        <Link href={`/addProduct?key=${secretKey}`} className="relative z-10">Add new product +</Link>
    </button>
}