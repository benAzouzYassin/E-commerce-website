import Image from "next/image";

export default function Hero() {
    return (
        <>
            <p className="text-center line-clamp-2 h-fit py-2  mt-36 font-bold  text-7xl  z-50">
                Welcome To{" "}
                <span className=" font-black  bg-clip-text text-transparent bg-gradient-to-l from-amber-600 to-red-600">
                    StoreName
                </span>{" "}
                👋
            </p>
            <p className="text-center  font-bold text-xl mt-2 w-[40vw] mx-auto">
                Imagine all{" "}
                <button className="p-1  hover:scale-90  active:scale-[85%]  border-2 text-md font-medium shadow-sm scale-[85%] border-black px-2 rounded-[6px]">
                    Clothing
                </button>
                <button className="p-1  hover:scale-90  active:scale-[85%]  border-2 text-md font-medium shadow-sm scale-[85%] border-black px-2 rounded-[6px]">
                    idk
                </button>{" "}
                <button className="p-1  hover:scale-90  active:scale-[85%]  border-2 text-md font-medium shadow-sm scale-[85%] border-black px-2 rounded-[6px]">
                    something
                </button>
                <button className="p-1  hover:scale-90  active:scale-[85%]  border-2 text-md font-medium shadow-sm scale-[85%] border-black px-2 rounded-[6px]">
                    something
                </button>{" "}
                <button className="p-1  hover:scale-90  active:scale-[85%]  border-2 text-md font-medium shadow-sm scale-[85%] border-black px-2 rounded-[6px]">
                    something
                </button>
                <button className="p-1  hover:scale-90  active:scale-[85%]  border-2 text-md font-medium shadow-sm scale-[85%] border-black px-2 rounded-[6px]">
                    something
                </button>
                <button className="p-1  hover:scale-90  active:scale-[85%]  border-2 text-md font-medium shadow-sm scale-[85%] border-black px-2 rounded-[6px]">
                    something
                </button>{" "}
                <button className="p-1  hover:scale-90  active:scale-[85%]  border-2 text-md font-medium shadow-sm scale-[85%] border-black px-2 rounded-[6px]">
                    something
                </button>{" "}
                at one place
            </p>
            <div className="flex w-full justify-center gap-2 mt-10">

                <button className="shadow-black/20 backdrop-blur-[0.5rem]  hover:scale-105 transition-transform font-semibold  bg-black/70 drop-shadow-sm  text-white px-10 py-4 rounded-full shadow-md text-lg">
                    Best Sellers
                </button>
                <button className="shadow-black/20 backdrop-blur-[0.5rem]  hover:scale-105 transition-transform font-semibold  bg-gradient-to-l drop-shadow-sm from-amber-600 to-red-600 text-white px-10 py-4 rounded-full shadow-md text-lg">
                    Our Products
                </button>
            </div>
            
           
        </>
    );
}
