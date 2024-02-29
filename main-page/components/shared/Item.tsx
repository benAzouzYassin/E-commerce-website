"use client"

import { ProductType } from "@/services/productService";
import { useRouter } from "next/navigation"
type Props = {} & ProductType;

export default function Item(props: Props) {
    const router = useRouter()
    return (
        <div onClick={() => router.push(`/product/${props.id}`)} className="border-2 hover:cursor-pointer transition-colors duration-500  shadow-black/20  hover:border-black/80 h-[250px]  xl:h-[350px]  flex flex-col  relative  rounded">
            <img src={props.imgLink} className="h-[65%] aspect-square" alt="" />
            {/* <div className="h-[65%]"></div> */}

            <div className="flex items-center absolute bottom-3 xl:bottom-6 w-full px-4">
                <p className="  line-clamp-2 drop-shadow-sm text-lg xl:text-2xl font-semibold  text-left w-full">
                    {props.name}
                </p>
                <p className="justify-self-end text-xl ">
                    {props.price.toString()}$
                </p>
            </div>
        </div>
    );
}
