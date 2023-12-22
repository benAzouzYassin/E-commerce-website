import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Cart from './Cart';

export default function Nav({ className }: { className: string }) {
    return (
        <>
            <nav
                className={cn(
                    "z-[999] w-[95%] shadow-lg left-[50%]   h-16  opacity-80 mt-4   rounded bg-[#ffffff]   ",
                    className
                )}>
                <div className="relative font-bold px-10 flex w-full h-full  items-center justify-center gap-x-16  text-[22px] text-black">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        quality={95}
                        width={35}
                        height={35}
                        className="absolute left-20"
                    />
                    <Link
                        href={"/"}
                        className="hover:cursor-pointer active:scale-95 hover:scale-[103%] hover:font-extrabold transition-all">
                        Home
                    </Link>
                    <Link
                        href={"/products/1"}
                        className="hover:cursor-pointer active:scale-95 hover:scale-[103%] hover:font-extrabold transition-all">
                        Products
                    </Link>
                    <Link
                        href={"/about"}
                        className="hover:cursor-pointer active:scale-95 hover:scale-[103%] hover:font-extrabold transition-all">
                        About us
                    </Link>
                    
                      <Cart/>
                </div>
            </nav>
        </>
    );
}
