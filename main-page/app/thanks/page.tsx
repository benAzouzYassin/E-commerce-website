import Nav from "@/components/shared/Nav"
import { Check } from "lucide-react"
import Link from "next/link"

export const metadata = {
    title: "Thank you",
};

export default async function Page() {
    return <main className="flex h-[70vh]">
        <section className="flex w-full h-full flex-col xl:mt-[15vh] mt-[12vh]">
            <Check width={300} height={300} className=" stroke-[#37bd54]/80 mx-auto" />
            <p className="text-7xl text-center font-bold text-black/70 mx-auto -mt-8 self-center ">Thank You !</p>
            <p className="xl:w-1/2 w-3/4 text-center mx-auto mt-4">
                Thank you for choosing <strong>Hg Store</strong>! Your order is sent, and we&apos;re
                thrilled to have you as our valued customer. Your order will be delivered within <strong>24h to 48h</strong></p>
            <Link
                href={"/products/1"}
                className="w-fit mx-auto mt-5 shadow-black/20  backdrop-blur-[0.5rem]  hover:scale-105 transition-transform font-semibold  bg-gradient-to-l drop-shadow-sm from-amber-600 to-red-500 text-white px-10 py-2 rounded shadow-md text-lg ">
                Continue Shopping
            </Link>

        </section>
    </main>
}