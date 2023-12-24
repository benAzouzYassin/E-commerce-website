"use client";

import { useCartContext } from "@/context/CartContext";
import { ProductType } from "@/services/productService";

export default function AddToCartBtn(props: ProductType) {
    const { addItem, toggleCart } = useCartContext();

    return (
        <button
            onClick={() => {
                addItem(props);
                toggleCart();
            }}
            className="bg-gradient-to-br from-[#2BB04A] to-green-500 py-1 rounded-md text-white text-xl font-medium mt-auto w-full">
            Add to cart
        </button>
    );
}
