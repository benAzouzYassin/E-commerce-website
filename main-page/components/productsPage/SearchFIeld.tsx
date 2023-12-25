"use client"

import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { usePathname , useSearchParams} from "next/navigation";
import { FormEvent, useState } from "react";

export default function SearchField() {
    const [searchValue ,setSearchValue] = useState("")
    const pathname = usePathname()
    const searchParams = useSearchParams()!
  

    const handleSubmit =(e:FormEvent)=>{
        e.preventDefault()
        const params = new URLSearchParams(searchParams)
        params.set("searchValue", searchValue )
        window.location.href = pathname + '?' + params.toString()
    }
    return (
        <form onSubmit={handleSubmit} className="relative flex items-center ">
            <Search className="absolute left-2 scale-110 stroke-foreground/70 " />
            <Input
                value={searchValue}
                onChange={(e)=>setSearchValue(e.target.value)}
                className="pl-8 w-[90%] lg:w-auto outline-none focus:border-none focus:ring-0 bg-white"
                type="text"
                placeholder="search"
            />
        </form>
    );
}
