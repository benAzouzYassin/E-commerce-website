import { ProductType, getBestSellers } from "@/services/productService";
import CategoryOverview from "./CategoryOverview";

export default async function BestSellers() {
    const bestSellers = await getBestSellers();
    return (
        <div id="bestSellers">
            <CategoryOverview products={bestSellers} name="" />
        </div>
    );
}
