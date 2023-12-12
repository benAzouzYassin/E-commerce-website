import Link from "next/link"

import { cn } from "@/lib/utils"

type AppPages = "Home" | "Products" | "Orders" | "Sales"

export function MainNav({
    className,
    currentPage,
    ...props
}: React.HTMLAttributes<HTMLElement> & { currentPage: AppPages }) {
    const currentPageClass = "text-sm font-medium transition-colors hover:text-primary"
    const otherPageClass = "text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
            {...props}
        >
            <Link
                href="/"
                className={currentPage == "Home" ? currentPageClass : otherPageClass}
            >
                Home
            </Link>
            <Link
                href="/products"
                className={currentPage == "Products" ? currentPageClass : otherPageClass}
            >
                Products
            </Link>
            <Link
                href="/orders"
                className={currentPage == "Orders" ? currentPageClass : otherPageClass}
            >
                Orders
            </Link>

        </nav>
    )
}