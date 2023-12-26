"use client"
import { Product } from "@/types/globalTypes";
import Link from "next/link";
import DeleteBtn from "./DeleteBtn";
import useSecretKey from "@/customHooks/useSecretKey";

export default function Product(props : Partial<Product>) {
    const secretKey = useSecretKey() 

    return   <div className="relative">
        <DeleteBtn productId={props?.id ?? ""}/>
                <Link href={`/updateProduct/${props.id}?key=${secretKey}`} className="p-2 hover:cursor-pointer hover:scale-105 transition-transform rounded-sm  border-2 flex flex-col h-80" key={props.id}>
                <div className="h-1/2 w-full relative p-1 ">
                    <img className="max-w-[150px] max-h-[90%]  mx-auto" src={props.imgLink} alt={props.name + "image"} />
                </div>
                <p className="px-2 mt-auto font-bold line-clamp-1">{props.name}</p>
                <p className="px-2 line-clamp-1"><span className="font-semibold">Price</span> : {props.price}</p>
                <div className="mb-7 text-sm pl-2 line-clamp-1 px-2 mt-1"><span className="font-semibold">Stock :</span> {props.stock} <span className="ml-10 font-semibold">Sold :</span> {props.orderTimes}</div>
            </Link>
</div>
}