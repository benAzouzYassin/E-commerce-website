"use client"

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Cart from './Cart';

export default function Nav({ className }: { className?: string }) {
    return (
        <>
            <nav
                className={cn(
                    "z-[50] w-full hidden lg:block   px-96 h-[10vh] sticky top-0 border-b border border-neutral-200 shadow-sm   bg-[#ffffff]   ",
                    className
                )}>
                <div className="relative   flex w-full h-full  items-center justify-center gap-x-16  text-[22px] text-black">
                    {/* <Image
                        src="/logo.png"
                        alt="logo"
                        quality={95}
                        width={40}
                        height={40}

                    /> */}
                    <div className="ml-auto flex gap-8 items-center">
                        <Link
                            href={"/"}
                            className="hover:cursor-pointer decoration-black/50 hover:underline hover:underline-offset-2  active:scale-95  transition-all">
                            Home
                        </Link>
                        <Link
                            href={"/products/1"}
                            className="hover:cursor-pointer  decoration-black/50 hover:underline hover:underline-offset-2  active:scale-95  transition-all">
                            Products
                        </Link>
                        <Link
                            href={"/about"}
                            className="hover:cursor-pointer  decoration-black/50 hover:underline hover:underline-offset-2  active:scale-95  transition-all">
                            About us
                        </Link>
                        <Cart />
                    </div>
                </div>
            </nav>
        </>
    );
}
