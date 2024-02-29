"use client"
import Link from "next/link"
export default function Hero() {
    // const categories = await getCategories();
    return (
        <div className="grid gap-4 w-full grid-cols-2 xl:grid-cols-3 grid-rows-2 h-[55vh] mt-10">
            <Link href={"/products/1"} className="bg-center border hover:cursor-pointer xl:row-span-2 bg-cover bg-no-repeat hover:bg-black/30 transition-colors ease-in duration-150  bg-black/10 bg-blend-overlay relative " style={{ backgroundImage: "url(/heroImg1.webp)" }}  ><p className="absolute  bottom-2 left-2   xl:bottom-5 xl:left-5  text-white drop-shadow-lg font-bold text-2xl  xl:text-4xl">Live Comfortably</p></Link>
            <Link href={"/products/1"} className="bg-center border hover:cursor-pointer xl:row-span-2 bg-cover bg-no-repeat hover:bg-black/30 transition-colors ease-in duration-150  bg-black/10 bg-blend-overlay relative " style={{ backgroundImage: "url(/heroImg2.webp)" }} ><p className="absolute  bottom-2 left-2   xl:bottom-5 xl:left-5  text-white drop-shadow-lg  font-bold text-2xl  xl:text-4xl">Skincare</p></Link>
            <Link href={"/products/1"} className="bg-center border hover:cursor-pointer xl:row-span-1 bg-cover bg-no-repeat hover:bg-black/30 transition-colors ease-in duration-150  bg-black/10 bg-blend-overlay relative " style={{ backgroundImage: "url(/heroImg3.webp)" }} ><p className="absolute  bottom-2 left-2   xl:bottom-5 xl:left-5  text-white drop-shadow-lg  font-bold text-2xl  xl:text-4xl">Kitchen</p></Link>
            <Link href={"/products/1"} className="bg-center border hover:cursor-pointer xl:row-span-1 bg-cover bg-no-repeat hover:bg-black/30 transition-colors ease-in duration-150  bg-black/10 bg-blend-overlay relative " style={{ backgroundImage: "url(/heroImg4.webp)" }} ><p className="absolute  bottom-2 left-2   xl:bottom-5 xl:left-5  text-white drop-shadow-lg  font-bold text-2xl  xl:text-4xl">Electronics</p></Link>
        </div>
    );
}
