"use client"

import { useCartContext } from "@/context/CartContext";
import { Product } from "@prisma/client";
type Props = {} & Product;
export default function Item(props: Props) {
    const {addItem , toggleCart} = useCartContext()
    return (
        <div className="border w-[90%] ml-5 bg-white shadow-sm shadow-black/10  flex p-3 rounded-md">
            <img src={props.imgLink} alt="" className="w-28" />
            <div className="ml-4 flex w-full flex-col px-5">
                <p className="font-bold text-2xl">{props.name}</p>
                <p className="font-bold">{props.price.toString()}$</p>
                <p className="pb-2 font-light mt-1">{props.description}</p>
                <button onClick={()=>{
                    addItem(props)
                    toggleCart()
                    }} className="bg-gradient-to-br from-[#2BB04A] to-green-500 py-1 rounded-md text-white text-xl font-medium mt-auto w-full">
                    Add to cart
                </button>
            </div>
        </div>
    );
}
