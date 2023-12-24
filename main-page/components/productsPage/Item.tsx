import { ProductType } from "@/services/productService";
import AddToCartBtn from "./AddToCartBtn";
type Props = {} & ProductType;
export default function Item(props: Props) {
    return (
        <div className="border w-[90%] ml-5 bg-white shadow-sm shadow-black/10  flex p-3 rounded-md">
            <img src={props.imgLink} alt="" className="w-28" />
            <div className="ml-4 flex w-full flex-col px-5">
                <p className="font-bold text-2xl">{props.name}</p>
                <p className="font-bold">{props.price.toString()}$</p>
                <p className="pb-2 font-light mt-1">{props.description}</p>
                <AddToCartBtn {...props}/>
            </div>
        </div>
    );
}
