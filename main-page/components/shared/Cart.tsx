"use client";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { useCartContext } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import CartItem from "./CartItem";

export default function Cart() {
    const { cartItems, isCartOpen, openCart, removeAllItems, toggleCart } =
        useCartContext();

    const handleOrderItems = () => {
        //TODO ordering logic
        removeAllItems();
    };

    return (
        <>
            <div
                className="justify-self-end absolute right-7 bg-gradient-to-tr from-[#db6494] to-[#eeb626] py-2 text-white font-bold px-6 rounded-md active:scale-100 hover:scale-[103%] transition-transform flex items-center gap-1 group"
                onClick={openCart}>
                {" "}
                View Cart
                <ShoppingCart className="stroke-[3px] transition-all group-hover:mr-[-4px] group-hover:ml-1" />
            </div>
            <div className="z-[999]">
                <Sheet open={isCartOpen}>
                    <SheetContent className="px-0">
                        <SheetHeader className="mb-5">
                            <SheetTitle className="ml-3 -mt-3">
                                My Cart :
                            </SheetTitle>
                        </SheetHeader>
                        {cartItems.length < 0 && (
                            <p className="text-center text-black/40 font-medium absolute top-1/2 text-xl w-full ">
                                Cart is empty
                            </p>
                        )}
                        <div className="h-[80%] overflow-y-scroll flex gap-2 flex-col">
                            {cartItems.map((item) => (
                                <CartItem key={item.id} {...item} />
                            ))}
                        </div>
                        <div className="flex flex-col w-full gap-2 absolute bottom-5">
                            <button
                                onClick={handleOrderItems}
                                className="font-medium  bg-black text-white w-[90%]  hover:bg-white hover:text-black transition-colors duration-300  ease-in-out hover:border-opacity-100 border-2 border-opacity-0 rounded-sm py-2 ml-[10%] -translate-x-[5%] ">
                                Order Now
                            </button>
                            <button className=" rounded-sm font-medium  w-[90%] bg-white text-black/70  hover:bg-black hover:text-white transition-colors duration-300 ease-in-out  border shadow-sm   py-2 ml-[10%] -translate-x-[5%] ">
                                Continue Shopping
                            </button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
}
