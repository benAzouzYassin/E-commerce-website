import Trending from "@/components/homePage/Trending"
import AddProduct from "@/components/productPage/AddProduct"
import ProductImage from "@/components/productPage/ProductImage"
import { getBestSellers } from "@/services/productService"
import { prisma } from "@/utils/prisma"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,

} from "@/components/ui/carousel"
import Item from "@/components/shared/Item"

//TODO MAKE THE back button on the nav
//TODO update your portfolio (10min)
//TODO fix the overflow (5min)
//TODO edit the scroll bar
//TODO fix some bugs in the dashboard ()

export default async function Page({ params }: { params: { id: string } }) {
    try {
        const product = await prisma.product.findFirst({ where: { id: params.id } })
        const bestSellers = await getBestSellers()
        if (!product) return <div>no such product</div>

        const productPrice = product.status === "" ? product.salePrice : product.price

        return <div className=" mb-16  xl:px-72 min-h-[100vh] bg-white overflow-x-hidden  w-full">
            <div className="flex  overflow-x-hidden flex-col-reverse px-2 lg:flex-row mt-10 shadow-md min-h-[60vh]   ">
                <ProductImage additionalImages={product.additionalImages} imgLink={product.imgLink} name={product.name} />
                <div className="lg:border-l-4 w-full   px-5  lg:w-1/2 border-black/40 p-5 lg:px-16 lg:py-24  bg-black/5">
                    <h1 className="text-4xl font-semibold drop-shadow-sm ">{product.name}</h1>
                    <p className="text-lg mt-8">{product.description}</p>
                    <AddProduct {...product} salePrice={product.salePrice.toNumber()} price={productPrice.toNumber()} />
                </div>
            </div>
            <h2 className="text-3xl pl-5 font-bold drop-shadow-sm mt-14">People Also Viewed</h2>
            <div className="w-[100vw] pl-2">

                <Carousel className="w-full mt-5 " >
                    <CarouselNext className="top-0  hidden lg:flex  bg-white border-black relative border-2  hover:bg-black/10 rounded-none px-7 h-8 left-[95%] translate-x-0" >
                        <p className=" font-semibold">
                            Right
                        </p>
                    </CarouselNext>
                    <CarouselPrevious className="top-0 hidden lg:flex absolute m-0 bg-white border-2 border-black/10  left-[89%] translate-x-0 rounded-none px-7 h-8 right-16">
                        <p className=" font-semibold">
                            Left
                        </p>
                    </CarouselPrevious>
                    <CarouselContent className="  border-red-500  ">
                        {bestSellers.map(product => (
                            <div className="w-[300px]" key={product.id}>
                                <CarouselItem key={product.id} className=" w-[220px] lg:w-[300px] " >
                                    <Item key={product.id} {...product} />
                                </CarouselItem>
                            </div>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div >

    } catch (error) {
        console.log(error)
        return <div className=" px-72 h-[100vh]  w-full" >error while getting your product</div>
    }
}

