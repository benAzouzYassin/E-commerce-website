"use client"
export default function Hero() {
    // const categories = await getCategories();
    return (
        <div className="grid gap-4 w-full grid-cols-3 grid-rows-2 h-[55vh] mt-10">
            <div className="bg-center border hover:cursor-pointer row-span-2 bg-cover bg-no-repeat hover:bg-black/30 transition-colors ease-in duration-150  bg-black/10 bg-blend-overlay relative " style={{ backgroundImage: "url(heroImg1.webp)" }}  ><p className="absolute bottom-5 left-5  text-white drop-shadow-lg  font-bold text-4xl">Live Comfortably</p></div>
            <div className="bg-center border hover:cursor-pointer  row-span-2 bg-cover bg-no-repeat hover:bg-black/30 transition-colors ease-in duration-150  bg-black/10 bg-blend-overlay relative " style={{ backgroundImage: "url(heroImg2.webp)" }} ><p className="absolute bottom-5 left-5  text-white drop-shadow-lg  font-bold text-4xl">Skincare</p></div>
            <div className="bg-center border hover:cursor-pointer  row-span-1 bg-cover bg-no-repeat hover:bg-black/30 transition-colors ease-in duration-150  bg-black/10 bg-blend-overlay relative " style={{ backgroundImage: "url(heroImg3.webp)" }} ><p className="absolute bottom-5 left-5  text-white drop-shadow-lg  font-bold text-4xl">Kitchen</p></div>
            <div className="bg-center border hover:cursor-pointer  row-span-1 bg-cover bg-no-repeat hover:bg-black/30 transition-colors ease-in duration-150  bg-black/10 bg-blend-overlay relative " style={{ backgroundImage: "url(heroImg4.webp)" }} ><p className="absolute bottom-5 left-5  text-white drop-shadow-lg  font-bold text-4xl">Electronics</p></div>
        </div>
    );
}
