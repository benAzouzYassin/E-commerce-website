import { getCategories } from "@/actions/sharedActions";
import Link from "next/link";
import ScrollBtn from '../shared/ScrollBtn';

export default async function Hero() {
    const categories = await getCategories();
    return (
        <>
            <p className="text-center line-clamp-2 h-fit py-2  mt-36 font-bold  text-7xl  z-50">
                Welcome To
                <span className=" font-black  bg-clip-text text-transparent bg-gradient-to-l from-amber-600 to-red-600">
                    StoreName
                </span>
                👋
            </p>
            <div className="text-center  font-bold text-xl mt-2 w-[40vw] mx-auto">
                Imagine all
                {categories.map((category) => (
                    <ScrollBtn key={category.id} content={category.name} targetId={category.name}  className="p-1  hover:scale-90  active:scale-[85%] -mx-1 border-2 text-md font-medium shadow-sm scale-[85%] border-black px-2 rounded-[6px]" />
                ))}
                at one place
            </div>
            <div className="flex w-full justify-center gap-2 mt-10">
                <ScrollBtn content="Best Sellers" targetId="bestSellers" className="shadow-black/20 backdrop-blur-[0.5rem]  hover:scale-105 transition-transform font-semibold  bg-black/70 drop-shadow-sm  text-white px-10 py-4 rounded-full shadow-md text-lg"/>
                <Link href={"/products/1"} className="shadow-black/20 backdrop-blur-[0.5rem]  hover:scale-105 transition-transform font-semibold  bg-gradient-to-l drop-shadow-sm from-amber-600 to-red-600 text-white px-10 py-4 rounded-full shadow-md text-lg">
                    Our Products
                </Link>
            </div>
        </>
    );
}
