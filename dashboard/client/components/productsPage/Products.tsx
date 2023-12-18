/* eslint-disable @next/next/no-img-element */
"use client"
import { useCallback, useEffect, useState } from "react"
import Categories from "./Categories"
import Link from "next/link"
import { Product as ProductType } from "@/types/globalTypes"
import { Search } from "lucide-react"
import { Input } from "../ui/input"
import Product from "./Product"

export default function Products({ products, categories }: { products: ProductType[], categories: string[] }) {
    const [selectedCategory, setSelectedCategory] = useState("All Products")
    const updateCategory = (category: string) => setSelectedCategory(category)
    const [visibleProducts, setVisibleProducts] = useState(products)
    const [searchInput, setSearchInput] = useState("")
    useEffect(() => {
        selectedCategory === "All Products" ? setVisibleProducts(products) : setVisibleProducts(products.filter(product => product.category.name == selectedCategory))
    }, [products, selectedCategory])

    const searchProduct = useCallback((searchValue: string) => {

        if (searchValue != "") {
            const searchResult = products.filter(product => product.name.toLowerCase().includes(searchValue))
            setVisibleProducts(searchResult)
        } else {
            setVisibleProducts(products)
        }
    }, [products])

    useEffect(() => {

        const timeoutId = setTimeout(() => searchProduct(searchInput.toLowerCase()), 500)
        return () => clearTimeout(timeoutId)
    }, [searchInput, searchProduct])


    return <div>
        <div className='flex '>
            <h2 className='text-5xl mt-[-10px] font-semibold'>Products</h2>
            <div className=' ml-auto relative flex items-center '>
                <Search className='absolute left-2 scale-110 stroke-foreground/70 ' />
                <Input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className='pl-8' type='text' placeholder='search product' />
            </div>
            <button className=" ml-10 border-2 px-3 rounded-md dark:font-normal font-medium border-foreground   before:ease relative  overflow-hidden py-2   transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-foreground before:opacity-10 before:duration-700  hover:before:-translate-x-40">
                <Link href={"/addProduct"} className="relative z-10">Add new product +</Link>
            </button>
        </div>
        <Categories categories={categories} selectNewCategory={updateCategory} selectedCategory={selectedCategory} />
        <div className="grid grid-cols-5 gap-7 mt-14">
            {visibleProducts.map((product: ProductType) => <Product key={product.id} {...product}/>)}
        </div>
    </div>
}

