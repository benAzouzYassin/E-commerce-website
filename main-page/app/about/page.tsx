import Nav from "@/components/shared/Nav";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
    title: "About us",
};

export default function Page() {
    return (
        <main className="flex flex-col">
            <Nav animate={false} className="w-[80%] mx-auto" />
            <section className="px-5 sm:px-10 lg:px-28 mt-40 xl:mt-20 flex">
                <div >
                    <h2 className="text-2xl font-mono tracking-wider font-bold text-neutral-500">
                        About us
                    </h2>
                    <p className=" font-bold text-3xl xl:text-4xl ">
                        we believe in providing a seamless and enjoyable
                        shopping experience.
                    </p>
                    <p className=" ml-1 xl:w-[80%] mb-7 font-medium text-sm text-neutral-500 mt-4 custom-text-shadow ">
                        HG-STORE is more than just an online store; we are a
                        community of like-minded individuals who share a love
                        for quality products and a commitment to making shopping
                        convenient and enjoyable. Whether you&apos;re a fashion
                        enthusiast, a tech-savvy gadget lover, or someone in
                        search of unique gifts.
                    </p>
                    <Link
                        href={"/products/1"}
                        className="shadow-black/20  backdrop-blur-[0.5rem]  hover:scale-105 transition-transform font-semibold  bg-gradient-to-l drop-shadow-sm from-amber-600 to-red-600 text-white px-10 py-4 rounded shadow-md text-lg ">
                        Our Products
                    </Link>
                </div>
                <Image
                    src="/about-page-img.svg"
                    alt=""
                    width={650}
                    height={650}
                    className="hidden xl:block lg:w-96 2xl:w-[650px]"
                />
            </section>
        </main>
    );
}
