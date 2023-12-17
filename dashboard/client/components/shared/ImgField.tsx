"use client"

import { useRef, useState } from "react"

export default function ImgField(props: { defaultUrl: string }) {

    const imgFieldRef = useRef<HTMLInputElement>(null)
    const [previewUrl, setPreviewUrl] = useState(props.defaultUrl)
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

            {/**tracking the preview image link (useFull when updating product) */}
            <input readOnly type="text" name="previewImgLink" value={previewUrl} className="hidden" />
            {/**tracking the image link that is saved in the db (useFull when updating product) */}
            <input readOnly type="text" name="oldImgLink" value={props.defaultUrl} className="hidden" />
        <input accept="image/png, image/jpeg" size={5} name="productImg" ref={imgFieldRef} onChange={handleChange} type="file" className=" hover:cursor-pointer z-50 h-full opacity-0" />
        <img onClick={ removeImg} className=" h-full z-10" src={previewUrl} alt="" />
    </>
}

