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
            className=" hover:bg-green-600/90 bg-green-500 py-2 lg:py-1 rounded-md text-white text-lg font-bold active:scale-[98%] transition-transform  mt-auto w-full">
            Add to cart
        </button>
    );
}
