"use client"

import Link from "next/link"

import { cn } from "@/utils/styleUtils"
import { useEffect, useState } from "react"

type AppPages = "Home" | "Products" | "Orders" | "Sales"

export function MainNav({
    className,
    currentPage,
    ...props
}: React.HTMLAttributes<HTMLElement> & { currentPage: AppPages }) {
    const currentPageClass = "text-sm font-medium transition-colors hover:text-primary"
    const otherPageClass = "text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    const [secretKey , setSecretKey] = useState("")
    useEffect(()=>{
        const key= (new URL(window.location.href)).searchParams.get("key")
        setSecretKey( key ?? "")

    },[])
    console.log(secretKey)
    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
            {...props}
        >
            <Link
                href={`/?key=${secretKey}`}
                className={currentPage == "Home" ? currentPageClass : otherPageClass}
            >
                Home
            </Link>
            <Link
                href={`/products?key=${secretKey}`}
                className={currentPage == "Products" ? currentPageClass : otherPageClass}
            >
                Products
            </Link>
            <Link
                href={`/orders?key=${secretKey}`}
                className={currentPage == "Orders" ? currentPageClass : otherPageClass}
            >
                Orders
            </Link>

        </nav>
    )
}