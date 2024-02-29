import Hero from "@/components/homePage/Hero";

import BestSellers from "@/components/homePage/BestSellers";
import Card from "@/components/homePage/Card";
import Trending from "@/components/homePage/Trending";
import Footer from "@/components/shared/Footer";


export const dynamic = 'force-dynamic'

export default async function Home() {
    return (
        <main className="w-[100vw] xl:px-96 px-3 relative flex-col   z-10 bg-background pb-36 flex opacity-100 overflow-x-hidden">
            <Hero />
            <BestSellers />
            <Card key="1" direction="left" title="Creative harmonious living" img="/homeCard1.webp" text="Our Products are all made to standard sizes so that you can mix and match them freely." />
            <Trending />
            <Card key="2" direction="right" title="Comfortable & Elegante Living" img="/homeCard2.webp" text="Our Products are all made to standard sizes so that you can mix and match them freely." />
        </main>
    );
}
