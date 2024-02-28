import Hero from "@/components/homePage/Hero";

import BestSellers from "@/components/homePage/BestSellers";
import Card from "@/components/homePage/Card";
import Trending from "@/components/homePage/Trending";
import Footer from "@/components/shared/Footer";


export const dynamic = 'force-dynamic'

export default async function Home() {
    // const productGroups = await getProductsGroupedByCategories()
    return (
        <main className="w-full px-96 relative flex-col z-10 bg-background pb-36 flex opacity-100 overflow-x-hidden">
            <Hero />
            <BestSellers />
            <Card key="1" direction="left" title="Creative harmonious living" img="/homeCard1.webp" text="RAOUF Products are all made to standard sizes so that you can mix and match them freely." />
            <Trending />
            <Card key="2" direction="right" title="Comfortable & Elegante Living" img="/homeCard2.webp" text="RAOUF Products are all made to standard sizes so that you can mix and match them freely." />
        </main>
    );
}
