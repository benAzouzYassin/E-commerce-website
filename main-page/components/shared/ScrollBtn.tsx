"use client"

import { scrollToElement } from "@/utils/others";

type Props= {
    content : string
    targetId : string
    className : string
} 

export default function ScrollBtn(props:Props) {
    return (
        <button
        onClick={()=>scrollToElement(props.targetId)}
            className={props.className}>
            {props.content}
        </button>
    );
}
