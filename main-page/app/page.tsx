import Hero from "@/components/homePage/Hero";
import CategoryOverview from "@/components/homePage/CategoryOverview";
import Nav from "@/components/shared/Nav";
import Footer from "@/components/shared/Footer";
import { getProductsGroupedByCategories } from '@/services/productService';
import BestSellers from "@/components/homePage/BestSellers";


export default async function Home() {
    const productGroups   = await getProductsGroupedByCategories()
    return (<>
        <main className="w-full px-2 relative flex-col z-10 bg-background pb-36 flex opacity-100 overflow-x-hidden">
            <Nav animate={true} className=" w-[80%] mx-auto" />
            <Hero />
            <div className="flex  flex-col md:px-16 px-5 mt-24 lg:px-16">
                <BestSellers/>
                {productGroups.map((group , index)=><CategoryOverview  name={group?.[0]?.Category?.name  ?? ""} key={index} products={group}/>)  }
            </div>
            {/**Mesh gradient */}
            <div className=" absolute top-0 right-0 h-[31rem] -z-10 lg:w-[60.25rem] rounded-full blur-[15rem] w-[68.75rem] bg-[#f5e888]"></div>
            <div className=" absolute top-10 left-0 h-[31rem] -z-10 lg:w-[40.25rem] rounded-full blur-[15rem] w-[68.75rem] bg-[#f1cdffce]"></div>
        </main>
            {/* <Footer /> */}
    </>
    );
}
