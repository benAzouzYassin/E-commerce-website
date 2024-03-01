
// import { Card, CardContent } from "@/components/ui/card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,

} from "@/components/ui/carousel"
import { getBestSellers } from "@/services/productService";
import Item from "../shared/Item";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default async function Trending() {
    const bestSellers = await getBestSellers();

    return <div className="w-full relative mt-20">
        <Carousel className="w-full " >
            <CarouselNext className="top-0 hidden lg:flex  bg-white border-black relative border-2  hover:bg-black/10 rounded-none px-7 h-8 left-[95%] translate-x-0" >
                <p className=" font-semibold">
                    Right
                </p>
            </CarouselNext>
            <CarouselPrevious className="top-0  hidden lg:flex absolute m-0 bg-white border-2 border-black/10  left-[89%] translate-x-0 rounded-none px-7 h-8 right-16">
                <p className=" font-semibold">
                    Left
                </p>
            </CarouselPrevious>
            <CarouselContent className="  border-red-500  ">
                {bestSellers.map(product => (
                    <div className=" w-[230px]  lg:w-[300px]" key={product.id}>
                        <CarouselItem key={product.id} className=" w-[230px] lg:w-[300px] " >
                            <Item key={product.id} {...product} />
                        </CarouselItem>
                    </div>
                ))}
            </CarouselContent>
        </Carousel>
    </div>
}