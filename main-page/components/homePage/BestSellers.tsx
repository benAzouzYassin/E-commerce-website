import { ProductType, getBestSellers } from "@/services/productService";
import CategoryOverview from "./CategoryOverview";
import Item from "../shared/Item";
// import BestSellers from '@/components/homePage/BestSellers';

export default async function BestSellers() {
    const bestSellers = await getBestSellers();
    return (
        <div className="mt-16" id="bestSellers">
            <h2 className="text-3xl drop-shadow-md text-black/70 font-semibold">Products we are proud of </h2>
            <div className="grid grid-cols-4 gap-6 mt-8">
                {bestSellers.map(product => (<Item key={product.id} {...product} />))}

            </div>
        </div>
    );
}
