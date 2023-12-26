"use client"

import { ProductType } from "@/services/productService";
import AddToCartBtn from "./AddToCartBtn";

type Props = {} & ProductType;

export default function Item(props: Props) {
    console.log(props.Category?.name)
    return (
        <div className="item-card shadow-md shadow-black/20  flex flex-col py-5 relative bg-[#ffffff] rounded-md px-2 w-[17rem] ">
            <img src={props.imgLink} className="h-[65%] aspect-square" alt="" />
            <span className="px-2 py-[2px] text-xs bg-gradient-to-br from-amber-800 to-rose-800  shadow-md rounded-full font-medium text-neutral-50 absolute top-2 left-2 w-fit">
                {props.Category?.name}
            </span>
            <div className="flex items-center px-5 mt-auto">
                <p className="font-bold line-clamp-1 text-lg text-left w-full">
                    {props.name}
                </p>
                <p className="justify-self-end font-medium">
                    {props.price.toString()}$
                </p>
            </div>
           <AddToCartBtn {...props} />
        </div>
    );
}
