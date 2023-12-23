import { Facebook, Instagram, Twitter } from "lucide-react";


export default function Footer() {
    return <footer className="px-16 mt-auto flex items-center text-white h-10 bg-black w-full">
    <div className="flex items-center gap-3">
        <span className="flex items-center gap-1 font-light ">
            <Facebook fill="white" stroke="black" />
            @Hg_STORE
        </span>
        <span className="flex items-center gap-1 font-light ">
            <Instagram fill="white" stroke="black" />
            @Hg_STORE
        </span>
        <span className="flex items-center gap-1 font-light ">
            <Twitter fill="white" stroke="black" />
            @Hg_STORE
        </span>
    </div>
    <span className="ml-auto">all right reserved 2023©</span>
</footer>
}