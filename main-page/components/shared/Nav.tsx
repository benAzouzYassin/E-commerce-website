import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Nav() {
    return (
        <nav className=" shadow-lg w-[60vw] h-16  opacity-60 mt-4 mx-auto  rounded bg-[#ffffff]  ">
        <ul className="relative font-bold px-10 flex w-full h-full  items-center justify-center gap-x-16  text-[20px] text-black">
            <Image src="/logo.png" alt="logo" quality={95} width={35} height={35} className="absolute left-20" />
          <li className="hover:cursor-pointer active:scale-95 hover:scale-[103%] hover:font-extrabold transition-all" >Home</li>
          <li className="hover:cursor-pointer active:scale-95 hover:scale-[103%] hover:font-extrabold transition-all">About</li>
          <li className="hover:cursor-pointer active:scale-95 hover:scale-[103%] hover:font-extrabold transition-all">Products</li>
          <li className=" justify-self-end absolute right-7"><button className="  bg-gradient-to-tr from-[#db6494] to-[#eeb626] py-2 text-white font-bold px-6 rounded-md active:scale-100 hover:scale-[103%] transition-transform flex items-center gap-1 group">Shop now <ArrowRight className="stroke-[3px] transition-all group-hover:mr-[-4px] group-hover:ml-1"/></button></li>
        </ul>
        </nav>
    );
}
