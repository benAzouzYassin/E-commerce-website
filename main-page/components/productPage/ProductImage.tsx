"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"


export default function ProductImage(props: { name: string, imgLink: string, additionalImages: string[] }) {
    const [selectedImage, setSelectedImage] = useState(props.imgLink)
    const [additionalImgIndex, setAdditionalImgIndex] = useState(0)
    return <div className="w-1/2 flex flex-col">
        <img className=" w-[50%] mx-auto mt-10 h-[50%] object-cocer bg-none" alt={props.name} src={selectedImage} />
        {/** the product other images (not ready) */}
        <div className=" w-full gap-3  mb-5 h-[18%] flex items-center justify-center mt-auto ">
            <div onClick={() => setAdditionalImgIndex(0)} className={cn("w-28 hover:cursor-pointer  hover:bg-black/10  h-full border-black/40 rounded border transition-colors duration-200", { "border-2": additionalImgIndex === 0 })} style={{ backgroundImage: `url(${props.imgLink})` }} ></div>
            <div onClick={() => setAdditionalImgIndex(1)} className={cn("w-28 hover:cursor-pointer  hover:bg-black/10  h-full border-black/40 rounded border transition-colors duration-200", { "border-2": additionalImgIndex === 1 })} ></div>
            <div onClick={() => setAdditionalImgIndex(2)} className={cn("w-28 hover:cursor-pointer  hover:bg-black/10  h-full border-black/40 rounded border transition-colors duration-200", { "border-2": additionalImgIndex === 2 })} ></div>
        </div>
    </div>
}