import Filters from "@/components/productsPage/Filters";
import Nav from "@/components/shared/Nav";
import { ArrowRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import Footer from "../../../components/shared/Footer";
import { getDividedProducts } from "@/services/productService";
import Item from "@/components/productsPage/Item";
import { Product } from "@prisma/client";
import Link from "next/link";

// divides the products into smaller

export const revalidate = 300; //revalidate cache every 5 minutes

export default async function Products({
    params,
}: {
    params: { pageNumber: string };
}) {
    const products =await getDividedProducts();
    
    const pageNumber = parseInt(params.pageNumber);
    const isValidPageNumber = pageNumber <= products.length;
    return (
        <main className="w-full  h-fit relative flex-col z-10 bg-gradient-to-br from-amber-50 to-blue-50 flex opacity-100">
            <Nav className="mx-auto" />
            <div className="flex flex-row px-36 h-full mt-36">
                <Filters />
                <div className="h-full  gap-5 flex-col w-full  flex ">
                    <div className="h-fit flex w-[90%] gap-1 ml-5 ">
                        <div className="  relative flex items-center ">
                            <Search className="absolute left-2  scale-110 stroke-foreground/70 " />
                            <Input
                                className="pl-8  outline-none focus:border-none focus:ring-0 bg-white"
                                type="text"
                                placeholder="search"
                            />
                        </div>
                        <OtherPages products={products} currentPageNumber={pageNumber}/>
                    </div>
                    {isValidPageNumber &&
                        products?.[pageNumber - 1].map((product : Product) => {
                            return <Item key={product.id} {...product} />
                        }
                        )}
                    <div className="flex gap-1 w-[90%] ml-5 ">
                    <OtherPages products={products} currentPageNumber={pageNumber}/>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

function OtherPageButton({
    number,
    className,
    selected,
}: {
    number: number;
    className?: string;
    selected?: boolean;
}) {
    return (
        <span
            className={cn(
                "h-8 w-8 flex items-center justify-center text-center font-bold rounded-md  border   text-black/90 border-black/20 shadow-black/20 shadow-sm ",
                className,
                { "bg-[#C70A0A]": selected, " text-white/90": selected }
            )}>
            {number}
        </span>
    );
}

function OtherPages({
    products,
    currentPageNumber,
}: {
    products: Array<Product[]>;
    currentPageNumber: number;
}) {
    return (
        <>
            <div className="ml-auto flex gap-1">
                {products.map((_, index) => (
                    <Link 
                        href={`/products/${index+1}`}
                        key={index}
                        className={cn(
                            "h-8 w-8 flex items-center justify-center text-center font-bold rounded-md  border   text-black/90 border-black/20 shadow-black/20 shadow-sm ",
                            {
                                "bg-[#C70A0A]": currentPageNumber === index + 1,
                                " text-white/90": currentPageNumber === index + 1,
                            }
                        )}>
                        {index + 1}
                    </Link >
                ))}
            </div>
          {currentPageNumber !== products.length &&  <Link href={`/products/${currentPageNumber + 1}`} className="h-8 w-8 flex items-center justify-center text-center font-bold rounded-md  border   text-black/90 border-black/20 shadow-black/20 shadow-sm ">
                <ArrowRight />
            </Link>}
        </>
    );
}
