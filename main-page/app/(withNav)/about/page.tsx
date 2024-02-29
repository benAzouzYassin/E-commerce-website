import Nav from "@/components/shared/Nav";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
    title: "About us",
};

export default function Page() {
    return (
        <div className="flex  flex-col min-h-[90vh] ">
            <section className="px-5 overflow-hidden pb-10 sm:px-10 lg:px-28 xl:mt-10 flex flex-col-reverse lg:flex-row">
                <div className="flex flex-col" >
                    <h2 className="text-2xl lg:text-4xl font-mono tracking-wider font-bold text-neutral-500">
                        About us
                    </h2>
                    <p className=" font-bold text-3xl  lg:w-[70%] xl:text-6xl mt-8 ">
                        we believe in providing a seamless and enjoyable
                        shopping experience.
                    </p>
                    <p className=" ml-1 xl:w-[70%] mb-7 font-medium text-[16px] lg:text-[22px] text-neutral-500 mt-8 custom-text-shadow ">
                        HG-STORE is more than just an online store; we are a
                        community of like-minded individuals who share a love
                        for quality products and a commitment to making shopping
                        convenient and enjoyable. Whether you&apos;re a fashion
                        enthusiast, a tech-savvy gadget lover, or someone in
                        search of unique gifts.
                    </p>
                    <Link
                        href={"/products/1"}
                        className="shadow-black/20  backdrop-blur-[0.5rem] hover mt-10 flex lg:inline-block  lg:w-[70%]  text-center items-center justify-center hover:scale-105 transition-transform font-semibold  bg-gradient-to-l drop-shadow-sm from-amber-600 to-red-600 text-white px-10 py-4 rounded shadow-md text-xl ">
                        Our Products
                    </Link>
                </div>
                <Image
                    src="/about-page-img.svg"
                    alt=""
                    width={650}
                    height={650}
                    className="xl:block  2xl:w-[800px]"
                />
            </section>
        </div>
    );
}
