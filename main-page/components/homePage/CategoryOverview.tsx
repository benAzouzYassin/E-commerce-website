import { Product } from "@prisma/client";
import Item from "./Item";
// type Props = {
//     name : string
//     products : Product[]
// }

export default function CategoryOverview(props : any) {
    const titleClassName = props.name==="Best Sellers"? "text-6xl font-sans text-center w-full mt-28 font-bold  bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 to-neutral-400" : "text-4xl font-sans text-center w-full mt-28 font-bold  bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 to-neutral-700"
    return (
        <>
            <p className={titleClassName}>
                {props.name}
            </p>
            <div className="w-full flex justify-center flex-wrap  gap-6 mt-10  ">
              {props.products.map((product : Product)=><Item key={product.id} {...product} />)}
            </div>
            <button className=" mx-auto text-2xl mt-8  font-medium hover:scale-[101%] active:scale-[97%] transition-transform text-white bg-[#721717] py-2 w-[82%] rounded-md shadow-md backdrop-brightness-200 backdrop-blur-[0.5rem] shadow-black/20  ">View More</button>
        </>
    );
}
