import { useEffect, useState } from "react"

export default function useSecretKey() {
    const [secretKey , setSecretKey] = useState("")
    useEffect(()=>{
        const key= (new URL(window.location.href)).searchParams.get("key")
        setSecretKey( key ?? "")
    },[])
    return secretKey
}