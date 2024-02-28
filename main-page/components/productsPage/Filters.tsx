"use client";

import { useEffect, useState } from "react";
import { getCategories } from "@/actions/sharedActions";
import { Category } from "@prisma/client";
import { addUrlParams, clearFilter } from "@/utils/urlParams";
import { cn } from "@/lib/utils";

export default function Filters({ selectedCategory }: { selectedCategory: string }) {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isFetching, setIsFetching] = useState(true)
    useEffect(() => {
        getCategories()
            .then((data) => setCategories(data))
            .catch((err) => console.error(err))
            .finally(() => setIsFetching(false))
    }, []);
    const handleFilter = (categoryId: string) => {
        addUrlParams({ key: "category", "value": categoryId })
    };

    const categoryClass = "text-sm  font-semibold bg-white border-2 border-black/20 hover:cursor-pointer active:scale-95 hover:bg-black/5 px-3 py-1   shadow-sm  shadow-black/10"
    const skeletonClass = "text-sm font-semibold px-10 py-3 shadow-sm border border-gray-200 hover:cursor-pointer skeleton-button bg-gradient-to-r from-black/10 to-black/5 animate-pulse "
    return (
        <ul className=" w-full flex gap-5 items-center justify-center mb-5  h-fit">
            {isFetching ? <>
                <li className={skeletonClass} > </li>
                <li className={skeletonClass}> </li>
                <li className={skeletonClass} > </li>
                <li className={skeletonClass} > </li>
            </> : <>
                <li onClick={clearFilter} className={cn(categoryClass, { "bg-black/70 hover:bg-black/80   text-white": selectedCategory === "all" })} > All</li>
                {categories.map(category => (<li
                    onClick={() => handleFilter(category.id)}
                    className={cn(categoryClass, { "bg-black/70 hover:bg-black/80  text-white": selectedCategory === category.id })} key={category.id}>
                    {category.name}
                </li>))}
            </>

            }
        </ul>
    );
}
