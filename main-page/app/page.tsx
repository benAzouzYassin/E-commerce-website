import Hero from "@/components/homePage/Hero";
import CategoryOverview from "@/components/homePage/CategoryOverview";
import Nav from "@/components/shared/Nav";
import { products } from "@/data";
import Footer from "@/components/shared/Footer";

export default function Home() {
    return (
        <main className="w-full relative flex-col z-10 bg-background flex opacity-100">
            <Nav className="fixed w-[75%] -translate-x-[50%]" />
            <Hero />
            <div className="flex  flex-col md:px-16 px-5 mt-24 lg:px-16">
                <CategoryOverview name="" products={products} />
                <CategoryOverview name="Clothes" products={products} />
                <CategoryOverview name="Electronics" products={products} />
                <CategoryOverview name="Games And Toys" products={products} />
                <CategoryOverview name="Kitchen Gadgets" products={products} />
            </div>
            {/**Mesh gradient */}
            <div className=" absolute top-0 right-0 h-[31rem] -z-10 lg:w-[60.25rem] rounded-full blur-[15rem] w-[68.75rem] bg-[#f5e888]"></div>
            <div className=" absolute top-10 left-0 h-[31rem] -z-10 lg:w-[40.25rem] rounded-full blur-[15rem] w-[68.75rem] bg-[#f1cdffce]"></div>
            <Footer />
        </main>
    );
}
