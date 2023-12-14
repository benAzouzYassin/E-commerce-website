"use client"

import { useEffect, useRef, useState } from "react"

export default function ImgField() {


    const imgFieldRef = useRef<HTMLInputElement>(null)
    const [previewUrl, setPreviewUrl] = useState("")
    const handleChange = () => {
        if (imgFieldRef.current?.files?.length) {

            setPreviewUrl(URL.createObjectURL((imgFieldRef.current.files?.[0])))
        }
    }
    const removeImg = () => {
        URL.revokeObjectURL((previewUrl))
        setPreviewUrl("")
    }

    return <>
        <input ref={imgFieldRef} onChange={handleChange} type="file" className=" hover:cursor-pointer z-50 h-full opacity-0" />
        <img onClick={() => setPreviewUrl("")} className=" h-full z-10" src={previewUrl} alt="" />
    </>
}

