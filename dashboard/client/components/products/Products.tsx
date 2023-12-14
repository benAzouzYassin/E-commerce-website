/* eslint-disable @next/next/no-img-element */
"use client"
import { useEffect, useState } from "react"
import CategoriesFilter from "./CategoriesFilter"
import Link from "next/link"

export default function Products({ products }: { products: any }) {
    const [selectedCategory, setSelectedCategory] = useState("All Products")
    const updateCategory = (category: string) => setSelectedCategory(category)
    const [visibleProducts, setVisibleProducts] = useState(products)
    useEffect(() => {
        console.log(selectedCategory)
        // TODO update the visible products depending on the selectedCategory state 
        // Note : when the selected category is set to `All Products`
    }, [selectedCategory])

    return <div>
        <CategoriesFilter selectNewCategory={updateCategory} selectedCategory={selectedCategory} />
        <div className="grid grid-cols-5 gap-7 mt-14">

            {products.map((product: any) => <Link href={`/updateProduct/${product.productId}`} className="p-2 hover:cursor-pointer hover:scale-105 transition-transform rounded-sm  border-2 flex flex-col h-80" key={product.id}>
                <div className="h-1/2 w-full relative p-1 ">
                    <img className="max-w-[150px] max-h-[90%]  mx-auto" src={product.imgLink} alt={product.name + "image"} />
                </div>
                <p className="px-2 mt-auto font-bold line-clamp-1">{product.name}</p>
                <p className="px-2 line-clamp-1"><span className="font-semibold">Price</span> : {product.price}</p>
                <div className="mb-7 text-sm pl-2 line-clamp-1 px-2 mt-1"><span className="font-semibold">Stock :</span> {product.count} <span className="ml-10 font-semibold">Sold :</span> {product.orderTimes}</div>

            </Link>)}
        </div>
    </div>
}