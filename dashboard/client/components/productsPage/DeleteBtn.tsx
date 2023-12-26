"use client";
import { Toaster, toast } from "sonner";
import { Trash2 } from "lucide-react";
import { deleteProduct } from "@/actions/productsActions";
import useSecretKey from "@/customHooks/useSecretKey";


export default function DeleteBtn({ productId }: { productId: string; }) {
    const secretKey = useSecretKey();

    const handleClick = () => {
        deleteProduct(productId).then(res => {
            console.log(res);
            if (res) {
                console.log(res)
                toast.success("deleted successfully");
                setTimeout(()=>window.location.href = `/products?key=${secretKey}` , 1500)
            }

        }).catch(err => console.log(err));
    };
    return <>
        <div onClick={handleClick} className=" z-50 hover:scale-105 transition-transform right-2 ml-auto bg-red-500/70 rounded-sm absolute mt-2 w-[20%] p-2 flex items-center justify-center mx-auto"><Trash2 /></div>
        <Toaster richColors style={{ fontSize: 18 }} />
    </>;

}
