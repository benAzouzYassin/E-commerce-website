import Nav from "@/components/shared/Nav";
import Image from "next/image";
import Link from "next/link";
export default function Page() {
    return (
        <main className="flex flex-col">
            <Nav className="w-3/4 mx-auto" />
            <section className="px-48 mt-20 flex">
                <div >
                    <h2 className="text-2xl font-mono tracking-wider font-bold text-neutral-500">
                        About us
                    </h2>
                    <p className=" font-bold text-4xl  w-[90%]">
                        we believe in providing a seamless and enjoyable
                        shopping experience.
                    </p>
                    <p className=" ml-1 w-[65%] mb-7 font-medium text-sm text-neutral-500 mt-4 custom-text-shadow ">
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
                    width={700}
                    height={700}
                    className=""
                />
            </section>
        </main>
    );
}
