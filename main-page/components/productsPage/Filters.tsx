"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Suspense, useEffect, useState } from "react";
import { getCategories } from "@/actions/sharedActions";
import { Category } from "@prisma/client";
import { addUrlParams } from "@/utils/others";

export default function Filters() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories()
            .then((data) => setCategories(data))

            .catch((err) => console.error(err));
    }, []);
    const handleSelect = (selectedName:string ,selectedValue : string ) => {
        addUrlParams({key : selectedName , "value" : selectedValue})
    };
    return (
        <aside className=" w-[25%] shadow-sm  shadow-black/10 backdrop-brightness-150 p-4 h-fit rounded-sm">
            <p className="font-bold text-stone-700 text-3xl mb-5 ">
                Filter Products
            </p>

            <Accordion type="multiple" className="text-lg">
                <Suspense fallback="loading ...">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>By Categories</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-2">
                            <RadioGroup defaultValue="">
                                {categories.map((category: Category) => (
                                    <div
                                        key={category?.id}
                                        className="flex items-center space-x-2">
                                        <RadioGroupItem
                                            onClick={() => handleSelect("category" , category.id)}
                                            value={category.id}
                                            id={category.id}
                                        />
                                        <label htmlFor={category.id}>
                                            {category.name}
                                        </label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </AccordionContent>
                    </AccordionItem>
                </Suspense>

                <AccordionItem value="item-2">
                    <AccordionTrigger>By Price</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2">
                        <RadioGroup defaultValue="">
                            <label
                                className="flex text-md items-center gap-2 font-medium"
                                onClick={() => handleSelect("price" ,"20-50")}>
                                <RadioGroupItem value="20$-50$" id="20$-50$" />
                                20$ - 50$
                            </label>
                            <label className="flex text-md items-center gap-2 font-medium" 
                                onClick={(e) => handleSelect("price" ,"50-100")}>
                            
                            
                                <RadioGroupItem value="50$-100$" />
                                50$ - 100$
                            </label>
                            <label className="flex text-md items-center gap-2 font-medium"
                            onClick={(e) => handleSelect("price" ,"100-500")}>

                                <RadioGroupItem value="Category number 1" />
                                100$ - 500$
                            </label>
                            <label className="flex text-md items-center gap-2 font-medium" 
                                onClick={(e) => handleSelect("price" ,"500-5000")}>
                                <RadioGroupItem value="500$-5000$" id="500$-5000$" />
                                500$ - 5000$
                            </label>
                        </RadioGroup>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>By Availability</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2">
                        <RadioGroup defaultValue="">
                            <label 
                            
                            className="flex text-md items-center gap-2 font-medium">
                                <RadioGroupItem value="Available" id="Available"
                            onClick={()=>handleSelect("status" , "published")}
                                
                                />
                                Available
                            </label>
                            <label className="flex text-md items-center gap-2 font-medium"
                            onClick={()=>handleSelect("status" , "on sale")}
                            >
                                <RadioGroupItem value="On Sale" id="onSale" />
                                On Sale
                            </label>
                            <label className="flex text-md items-center gap-2 font-medium"
                            onClick={()=>handleSelect("status" , "coming soon")}
                            
                            >
                                <RadioGroupItem value="comingSoon" id="comingSoon" />
                                Coming Soon
                            </label>
                        </RadioGroup>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </aside>
    );
}
