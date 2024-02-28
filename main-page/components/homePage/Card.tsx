import { cn } from "@/lib/utils"

type Props = { direction: "left" | "right", title: string, text: string, img: string }

export default function Card(props: Props) {
    return <div className={cn("w-full h-80 mt-16 flex ", { "flex-row-reverse": props.direction == "right" })}>
        <div className="w-1/2 p-16 bg-black/5 rounded-l-lg">
            <h3 className="text-3xl font-semibold drop-shadow-sm ">{props.title}</h3>
            <p className="text-xl mt-5">{props.text}</p>
            <button className="mt-8 hover:bg-black/90 hover:scale-105 active:scale-100 text-lg  py-3 transition-all ease-in-out bg-black px-6  rounded text-white" >Shop now</button>
        </div>
        <div className="w-1/2 bg-black/20 bg-cover bg-center bg-no-repeat rounded-r-lg " style={{ backgroundImage: `url(${props.img})` }} ></div>
    </div>
}