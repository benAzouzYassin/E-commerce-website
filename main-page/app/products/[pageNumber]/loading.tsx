import Filters from "@/components/productsPage/Filters";
import Nav from "@/components/shared/Nav";
import {  Loader2Icon } from "lucide-react";
import SearchField from "@/components/productsPage/SearchFIeld";


export const metadata = {
    title: "products",
};

export const dynamic = 'force-dynamic'

export default async function Products() {
    
    return (
        <main className="w-full min-h-[100vh] h-fit relative  flex-col z-10 bg-[#fafafa] flex opacity-100">
            <Nav animate={false} className="mx-auto" />
            <div className="flex flex-row px-4 lg:px-20 h-full mt-36 pb-20">
                <Filters />
                <div className="h-full  gap-5 flex-col w-full  flex ">
                    <div className="h-fit flex lg:w-[90%] lg:ml-5 ">
                        <SearchField />
                    </div>
              
                    <div className="flex items-center  gap-1 w-[90%] ml-5 ">
                        <Loader2Icon height={250} width={250} className=" mx-auto mt-16 stroke-black/60 stroke-[1px] animate-spin"  />
              
                    </div>
                </div>
            </div>
        </main>
    );
}


