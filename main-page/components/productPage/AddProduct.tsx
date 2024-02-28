"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { useCartContext } from "@/context/CartContext"
import { ProductType } from "@/services/productService"
type Props = {} & ProductType
export default function AddProduct(props: ProductType) {
    const { addItem } = useCartContext()
    const [quantity, setQuantity] = useState(1)
    const increaseQuantity = () => setQuantity(old => old + 1)
    const decreaseQuantity = () => setQuantity(old => {
        if (quantity > 1) return old - 1
        return old
    })

    const price = props.price * quantity

    return <div>
        <div className="flex items-center  gap-4 h-12 mt-10 ">
            <span className="h-full  justify-self-start mt-2 text-2xl font-semibold mr-2">Quantity :</span>
            <div className="border mx-auto -translate-x-5  border-black flex h-12 text-xl font-bold text-center  w-36 ">
                <button className="w-1/3  h-full bg-white flex justify-center items-center" onClick={decreaseQuantity}><Minus className="stroke-[2px]" /></button>
                <span className="w-1/3 border border-y-0 border-black h-full flex justify-center items-center mb-2 " >{quantity}</span>
                <button className="w-1/3 bg-white h-full flex justify-center items-center" onClick={increaseQuantity}><Plus className="stroke-[2px]" /></button>
            </div>
            <span className="h-full mt-2 text-2xl   font-semibold">${price.toFixed(2)}</span>
        </div>
        <div className="flex gap-4 mt-16 items-center justify-center w-full">
            <button onClick={() => addItem(props, quantity)} className="bg-none text-xl hover:bg-black/5   border border-black  transition-colors ease-in duration-20  w-1/2 py-2 font-semibold "> Add to cart</button>
            <button className="hover:bg-[#72162d] text-xl bg-[#B6002C] transition-colors ease-in duration-20    text-white w-1/2 px-9 py-2 font-semibold ">Buy now</button>
        </div>

    </div>
}