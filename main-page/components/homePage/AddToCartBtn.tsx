"use client"

import { useCartContext } from "@/context/CartContext";
import { ProductType } from "@/services/productService";

export default function AddToCartBtn(props: ProductType) {
    const { addItem, toggleCart } = useCartContext()

    return <button
        onClick={() => {
            addItem(props);
            toggleCart();
        }}
        className="transition-colors hover:bg-black/80 w-[90%] mx-auto bg-black/70 mt-auto py-1  font-semibold text-white">
        Add to cart
    </button>

}