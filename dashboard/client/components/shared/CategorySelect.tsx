"use client"

import { cn } from "@/utils/styleUtils";
import { Category } from "@/types/globalTypes";
import { ChangeEvent, KeyboardEvent, useState } from "react";

export default function CategorySelect({ savedCategories , defaultCategory }: { savedCategories: Category[] ,defaultCategory: string}) {
    const [selectedOptionId, setSelectedOptionId] = useState(defaultCategory)
    const [visibleOptions, setVisibleOptions] = useState([...savedCategories])
    const [textInput, setTextInput] = useState(defaultCategory)
    const [isTyping, setIsTyping] = useState(false)
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && textInput != "") {
            setSelectedOptionId(textInput)
            setIsTyping(false)
        }
    }
    const handleOptionClick = (opt: { name?: string, id?: string }) => {
        console.log("option was clicke")
        setSelectedOptionId(opt?.id ?? "")
        setTextInput(opt?.name ?? "")
        setIsTyping(false)
    }

    const handleBlur = () => {
        setSelectedOptionId(textInput)
        setTimeout(() => setIsTyping(false), 130)
    }


    const handleTextInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value
        setTextInput(input)
        if (input !== "") {
            setVisibleOptions(savedCategories.filter(opt => opt.name.toLowerCase().startsWith(input.toLowerCase())))
            setIsTyping(true)
        }
        if (input === "") setVisibleOptions([...savedCategories])
    }


    return <div>
        {/**readOnly fields are used to pass required data to the form actions */}
        <input name="productCategory" type="text" className="hidden" readOnly value={selectedOptionId} />
        <input autoComplete="off" required name="visible" placeholder="Select or type a category" className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50  w-full" onBlur={handleBlur} onFocus={() => setIsTyping(true)} type="text" value={textInput} onChange={handleTextInputChange} onKeyDown={handleKeyDown} />
        {isTyping &&
            <ul className="shadow-md animate-in  fade-in-0 zoom-in-95 slide-in-from-top-2 relative  mt-3 max-h-96 min-w-[8rem] overflow-hidden rounded-md border  text-popover-foreground ">
                {visibleOptions.map(opt => <li onClick={() => handleOptionClick(opt)} className={cn(
                    "relative flex w-full z-50 hover:cursor-pointer hover:bg-foreground/10 select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none  ")} key={opt.id}>{opt.name}</li>)}</ul>}
    </div>
}
