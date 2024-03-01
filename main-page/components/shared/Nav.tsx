"use client"

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Cart from './Cart';
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Nav({ className }: { className?: string }) {
    const [mobileMenu, setMobileMenu] = useState(false)
    const router = useRouter()
    return (
        <>
            <nav
                className={cn(
                    "z-[50] w-[100vw]    lg:block    lg:px-96 h-[9vh]  lg:h-[10vh] fixed  left-0 top-0 border-b flex   border border-neutral-200 shadow-sm   bg-[#ffffff]   ",
                    className
                )}>
                <ArrowLeft onClick={() => router.back()} className="w-8 h-10 absolute stroke-[3px] lg:hidden  stroke-black/80 left-3 top-3" />
                <input onClick={() => setMobileMenu(!mobileMenu)} readOnly checked={mobileMenu} type="checkbox" role="button" aria-label="Display the menu" className="nav-btn lg:hidden ml-auto mt-5 w-12 " />
                <div className="relative hidden  lg:flex w-full h-full  items-center justify-center gap-x-16  text-[22px] text-black">
                    {/* <Image
                        src="/logo.png"
                        alt="logo"
                        quality={95}
                        width={40}
                        height={40}

                    /> */}
                    <div className="ml-auto hidden lg:flex gap-8 items-center">
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

                {mobileMenu && <div className="  flex-col text-4xl flex absolute top-full  gap-8 w-full h-[90vh] bg-white items-center">

                    <Link
                        onClick={() => setMobileMenu(false)}
                        href={"/"}
                        className="hover:cursor-pointer decoration-black/50 hover:underline hover:underline-offset-2  active:scale-95  transition-all">
                        Home
                    </Link>
                    <Link
                        onClick={() => setMobileMenu(false)}

                        href={"/products/1"}
                        className="hover:cursor-pointer  decoration-black/50 hover:underline hover:underline-offset-2  active:scale-95  transition-all">
                        Products
                    </Link>
                    <Link
                        onClick={() => setMobileMenu(false)}
                        href={"/about"}
                        className="hover:cursor-pointer  decoration-black/50 hover:underline hover:underline-offset-2  active:scale-95  transition-all">
                        About us
                    </Link>
                    <Cart className="scale-[200%]" />
                </div>}
            </nav>
        </>
    );
}
