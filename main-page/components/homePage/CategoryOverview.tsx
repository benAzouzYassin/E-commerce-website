import Item from "./Item";
import { ProductType } from "@/services/productService";
import Link from "next/link";

type Props = {
    name: string;
    products: ProductType[];
};

export default function CategoryOverview(props: Props) {
    return (
        <>
            {props.products.length > 0 && (
                <section id={props.name} className="flex flex-col">
                    <p className="text-6xl font-sans text-center w-full mt-28 font-bold  bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 to-neutral-400">
                        {props.name}
                    </p>
                    <div className="w-full flex justify-center flex-wrap  gap-6 mt-10  ">
                        {props.products.map((product: ProductType) => (
                            <Item key={product.id} {...product} />
                        ))}
                    </div>
                    <Link
                        href={"/products/1"}
                        className=" text-center mx-auto text-2xl mt-8  font-medium hover:scale-[101%] active:scale-[97%] transition-transform text-white bg-[#721717] py-2 w-[82%] rounded-md shadow-md backdrop-brightness-200 backdrop-blur-[0.5rem] shadow-black/20  ">
                        View More
                    </Link>
                </section>
            )}
        </>
    );
}
