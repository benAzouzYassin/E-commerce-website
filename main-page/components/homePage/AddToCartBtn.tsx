"use client"

import { useCartContext } from "@/context/CartContext";
import { ProductType } from "@/services/productService";

export default function AddToCartBtn(props: ProductType) {
    const {addItem , toggleCart} = useCartContext()

    return <button
    onClick={() => {
        addItem(props);
        toggleCart();
    }}
    className=" hover:translate-y-[-2px] hover:scale-[101%] active:scale-[98%]  transition-transform w-[90%] mx-auto bg-gradient-to-br from-amber-600 to-red-500 mt-auto py-1 rounded font-semibold text-white">
    Add to cart
</button>
    
}