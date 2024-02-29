import { ArrowRight } from "lucide-react";
import { cn, wait } from "@/lib/utils";
import { ProductType, getDividedProducts } from "@/services/productService";
import Item from "@/components/shared/Item";
import Link from "next/link";
import Filters from "@/components/productsPage/Filters";
import { Suspense } from 'react';


export const metadata = {
    title: "products",
};


export const dynamic = 'force-dynamic'

export default async function Products({
    params,
    searchParams,
}: {
    params: { pageNumber: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}) {

    const pageNumber = parseInt(params.pageNumber) ?? 1;
    const searchValue = searchParams?.["searchValue"]?.toString();
    const category = searchParams?.["category"]?.toString();
    const price = searchParams?.["price"]?.toString();
    const status = searchParams?.["status"]?.toString();

    //get that the page only have 10 products
    const products = await getDividedProducts(status, category, price);

    const isValidPageNumber = pageNumber <= products.length;
    //handle the searching of a product by name
    const currentPageProducts = await products?.[pageNumber - 1];
    const visibleProducts = searchValue
        ? currentPageProducts?.filter((p: ProductType) =>
            p.name.toLowerCase().startsWith(searchValue.toLowerCase())
        )
        : currentPageProducts;
    await wait(5000)
    return (
        <main className="w-full md:px-32 lg:56 xl:px-72  min-h-[100vh] h-fit relative  flex-col z-10 bg-[#fafafa] flex opacity-100">
            <div className="  px-4 xl:px-20 h-full mt-10 lg:mt-20 pb-20">
                <Suspense fallback="loading...">
                    <Filters selectedCategory={category ?? "all"} />
                </Suspense>
                <div className="h-full  gap-5 flex-col w-full  flex ">
                    <div className="grid sm:grid-cols-3  lg:grid-cols-4 grid-cols-2 gap-5">
                        {isValidPageNumber &&
                            visibleProducts?.map((product: ProductType) => {
                                return <Item key={product.id} {...product} />;
                            })}
                    </div>
                    <div className="flex gap-1 w-full ml-5 ">
                        <OtherPages
                            products={products}
                            currentPageNumber={pageNumber}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

//the small pagination buttons in the end of the page 
function OtherPages({
    products,
    currentPageNumber,
}: {
    products: Array<ProductType[]>;
    currentPageNumber: number;
}) {
    if (products.length <= 1) return null
    return (
        <>
            <div className="ml-auto   flex gap-1">
                {products.map((_, index) => (
                    <Link
                        href={`/products/${index + 1}`}
                        key={index}
                        className={cn(
                            "h-8 w-8 flex items-center justify-center text-center font-bold rounded-md  border   text-black/90 border-black/20 shadow-black/20 shadow-sm ",
                            {
                                "bg-black": currentPageNumber === index + 1,
                                " text-white/90":
                                    currentPageNumber === index + 1,
                            }
                        )}>
                        {index + 1}
                    </Link>
                ))}
            </div>
            {currentPageNumber !== products.length && (
                <Link
                    href={`/products/${currentPageNumber + 1}`}
                    className=" ml-1 h-8 w-8 flex items-center justify-center text-center font-bold rounded-md  border   text-black/90 border-black/20 shadow-black/20 shadow-sm ">
                    <ArrowRight />
                </Link>
            )}
        </>
    );
}
