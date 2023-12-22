import { CartItemType, useCartContext } from "@/context/CartContext";
import { Trash2 } from "lucide-react";

export default function CartItem(props : CartItemType ) {
    const {removeOneItem, removeItemAllQuantity, addQuantityToItem } = useCartContext()

    return (
        <>
            <div className="flex h-20 translate-x-[5%] shadow-sm shadow-black/10 border w-[90%]  rounded-md p-2">
                <img
                    src={props.imgLink}
                    className="h-full w-20"
                    alt=""
                />
                <div className="flex flex-col ml-2">
                    <p className="font-bold -mt-1 ">{props.name}</p>
                    <p className="text-sm">{props.price.toString()}$</p>
                    <p className="text-sm mb-2 mt-auto">
                        <div className="flex gap-1 shrink-0">
                            Quantity :
                            <button onClick={()=>removeOneItem(props.id)} className="bg-black/80  text-center w-6 rounded font-medium text-white">-</button>
                            <p className="w-6 focus-within:outline-none rounded-md bg-neutral-100 shadow-sm border text-center">{props.cartQuantity}</p>
                            <button onClick={()=>addQuantityToItem(props.id, 1)} className="bg-black/80  text-center w-6 rounded font-medium text-white" >+</button>
                        </div>

                    </p>
                </div>
                <Trash2 onClick={()=>removeItemAllQuantity(props.id)} className="hover:cursor-pointer hover:scale-105 transition-transform active:scale-95 mt-1 ml-auto" />
            </div>
        </>
    );
}
