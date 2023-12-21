import Item from "@/components/homePage/Item";
import Filters from "@/components/productsPage/Filters";
import Nav from "@/components/shared/Nav";
import { ArrowRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export default function Products() {
    return (
        <main className="w-full pb-20 h-fit relative flex-col z-10 bg-gradient-to-br from-amber-50 to-blue-50 flex opacity-100">
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
                        </div>{" "}
                        <OtherPageButton
                            selected
                            className="ml-auto"
                            number={1}
                        />
                        <OtherPageButton number={2} />
                        <OtherPageButton number={3} />
                        <span className="h-8 w-8 flex items-center justify-center text-center font-bold rounded-md  border   text-black/90 border-black/20 shadow-black/20 shadow-sm ">
                            <ArrowRight />
                        </span>
                    </div>
                    <ProductsPageItem />
                    <ProductsPageItem />
                    <ProductsPageItem />
                    <ProductsPageItem />
                    <ProductsPageItem />
                    <ProductsPageItem />
                    <ProductsPageItem />
                </div>
            </div>
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

function ProductsPageItem() {
    return (
        <div className="border-2 w-[90%] ml-5  flex p-3 rounded-md">
            <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt=""
                className="w-28"
            />
            <div className="ml-4 flex w-full flex-col px-5">
                <p className="font-bold text-2xl">Product full name</p>
                <p className="font-bold">215.89$</p>
                <p className="pb-2 font-light mt-1">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Assumenda accusantium consectetur libero itaque, debitis
                    voluptatibus dicta culpa error quia placeat! Voluptatem
                    optio officia deleniti soluta.
                </p>
                <button className="bg-gradient-to-br from-[#2BB04A] to-green-500 py-1 rounded-md text-white text-xl font-medium mt-auto w-full">
                    Add to cart
                </button>
            </div>
        </div>
    );
}
