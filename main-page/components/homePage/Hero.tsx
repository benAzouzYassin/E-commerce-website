"use client"
import Link from "next/link";
import ScrollBtn from '../shared/ScrollBtn';
import { AnimatePresence, motion } from "framer-motion";

export default function Hero() {
    // const categories = await getCategories();
    const categories = [{ name: "electronics", id: "electronics" }, { name: "games and toys", id: "games and toys" }]
    return (
        <>
            <AnimatePresence mode="popLayout">
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center flex lg:flex-row flex-col  h-fit py-3   mt-28 font-bold  line-clamp-3  text-6xl lg:text-8xl mx-auto ">
                    Welcome To <br/>
                    <ul className=" z-[898] font-black text-[#DA5215]  bg-clip-text  pb-2  items-center justify-center    flex">
                       <span className="lg:w-2"></span>{"HG STORE".split("").map((letter, index) => <motion.li key={index} initial={{ opacity: 0, marginTop: "10px" }} animate={{ opacity: 1, marginTop: 0 }} transition={{ delay: 0.1 * index }} >{letter}</motion.li>)}
                    </ul>
                    <motion.span className="hidden  lg:block" initial={{ scale: 0 }} animate={{ scale: 1 }} >👋</motion.span>
                </motion.div>
                <motion.div initial={{opacity : 0 , y: 20}} animate={{opacity : 1 , y : 0}} className="text-center font-bold text-xl mt-2 w-full lg:w-[45vw] mx-auto">
                    All
                    {categories.map((category) => (
                        <ScrollBtn key={category.id} content={category.name} targetId={category.name} className="p-1  hover:scale-90  active:scale-[85%] -mx-1 border-2 text-md font-medium shadow-sm scale-[85%] border-black px-2 rounded-[6px]" />
                    ))}
                    at one place
                </motion.div>
                <motion.div initial={{scale : 0}} animate={{scale : 1}} className="flex  flex-col-reverse lg:flex-row w-full justify-center gap-2 mt-10">
                    <ScrollBtn content="Best Sellers" targetId="bestSellers" className="shadow-black/50 backdrop-blur-[0.5rem]  hover:scale-105 transition-transform font-bold  bg-black/70 drop-shadow-sm  text-white px-10 py-4 rounded-full shadow-md text-lg" />
                    <Link href={"/products/1"} className="shadow-black/20 backdrop-blur-[0.5rem]  hover:scale-105 transition-transform font-bold text-center  bg-gradient-to-l drop-shadow-sm from-amber-600 to-red-600 text-white px-10 py-4 rounded-full shadow-md text-lg">
                        Our Products
                    </Link>
                </motion.div>
            </AnimatePresence>
        </>
    );
}
