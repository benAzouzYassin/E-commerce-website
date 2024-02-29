import Link from "next/link"

import { cn } from "@/lib/utils"

type Props = { direction: "left" | "right", title: string, text: string, img: string }

export default function Card(props: Props) {
    return <div className={cn("w-full h-96  xl:h-80 mt-16 flex flex-col xl:flex-row ", { "xl:flex-row-reverse flex-col": props.direction == "right" })}>
        <div className="xl:w-1/2 w-full h-1/2 xl:h-full   p-3 xl:p-16 bg-black/5 rounded-t-lg xl:rounded-none">
            <h3 className="text-xl xl:text-3xl font-semibold drop-shadow-sm ">{props.title}</h3>
            <p className="xl:text-xl text-sm mt-5">{props.text}</p>
            <Link href={"/products/1"} className="mt-10 inline-block hover:bg-black/90 hover:scale-105 active:scale-100 text-lg  py-3 transition-all ease-in-out bg-black px-6  rounded text-white" >Shop now</Link>
        </div>
        <div className={cn("xl:w-1/2 w-full h-1/2 xl:h-full bg-black/20 bg-cover bg-center bg-no-repeat rounded-b-lg xl:rounded-none ")} style={{ backgroundImage: `url(${props.img})` }} ></div>
    </div>
}