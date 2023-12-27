import Filters from "@/components/productsPage/Filters";
import Nav from "@/components/shared/Nav";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Footer from "../../../components/shared/Footer";
import { ProductType, getDividedProducts } from "@/services/productService";
import Item from "@/components/productsPage/Item";
import Link from "next/link";
import SearchField from "@/components/productsPage/SearchFIeld";


export const metadata = {
    title: "products",
};

export const revalidate = 300; //revalidate cache every 5 minutes

export default async function Products({
    params,
    searchParams,
}: {
    params: { pageNumber: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}) {
    
    const pageNumber = parseInt(params.pageNumber)  ?? 1;
    const searchValue = searchParams?.["searchValue"]?.toString();
    const category =  searchParams?.["category"]?.toString() ;
    const price = searchParams?.["price"]?.toString();
    const status = searchParams?.["status"]?.toString() ;

    const products = await getDividedProducts(status ,category ,  price);
    const isValidPageNumber =   pageNumber <= products.length;

    //handle the searching of a product by name
    const currentPageProducts = await products?.[pageNumber - 1];
    const visibleProducts = searchValue
        ? currentPageProducts?.filter((p: ProductType) =>
              p.name.toLowerCase().startsWith(searchValue.toLowerCase())
          )
        : currentPageProducts;
    return (
        <main className="w-full min-h-[100vh] h-fit relative  flex-col z-10 bg-[#fafafa] flex opacity-100">
            <Nav animate={false} className="mx-auto" />
            <div className="flex flex-row px-4 lg:px-20 h-full mt-36 pb-20">
                <Filters />
                <div className="h-full  gap-5 flex-col w-full  flex ">
                    <div className="h-fit flex lg:w-[90%] lg:ml-5 ">
                        <SearchField />
                        <OtherPages
                            products={products}
                            currentPageNumber={pageNumber}
                        />
                    </div>
                    {isValidPageNumber &&
                        visibleProducts?.map((product: ProductType) => {
                            return <Item key={product.id} {...product} />;
                        })}
                    <div className="flex gap-1 w-[90%] ml-5 ">
                        <OtherPages
                            products={products}
                            currentPageNumber={pageNumber}
                        />
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </main>
    );
}


function OtherPages({
    products,
    currentPageNumber,
}: {
    products: Array<ProductType[]>;
    currentPageNumber: number;
}) {
    return (
        <>
            <div className="ml-auto flex gap-1">
                {products.map((_, index) => (
                    <Link
                        href={`/products/${index + 1}`}
                        key={index}
                        className={cn(
                            "h-8 w-8 flex items-center justify-center text-center font-bold rounded-md  border   text-black/90 border-black/20 shadow-black/20 shadow-sm ",
                            {
                                "bg-[#C70A0A]": currentPageNumber === index + 1,
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
