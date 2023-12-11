"use client"

type Props = {
    selectedCategory: string
    selectNewCategory: (category: string) => void
}



export default function CategoriesFilter({ selectNewCategory, selectedCategory }: Props) {
    const selectedClass = "bg-muted-foreground/20 p-2 rounded-full hover:cursor-pointer"
    const notSelectedClass = "p-2 hover:bg-muted-foreground/10 hover:cursor-pointer rounded-full"

    return <div className="text-foreground/80 flex mt-6 ml-2">
        <span className=" font-semibold p-2">ALL CATEGORIES :</span>
        <ul className="flex gap-x-6 ml-4 font-medium ">
            <li onClick={() => selectNewCategory("All Products")} className={selectedCategory === "All Products" ? selectedClass : notSelectedClass}>All Products</li>
            <li onClick={() => selectNewCategory("Basketball")} className={selectedCategory === "Basketball" ? selectedClass : notSelectedClass}>Basketball</li>
            <li onClick={() => selectNewCategory("Clothes")} className={selectedCategory === "Clothes" ? selectedClass : notSelectedClass}>Clothes</li>
            <li onClick={() => selectNewCategory("Games")} className={selectedCategory === "Games" ? selectedClass : notSelectedClass}>Games</li>
            <li onClick={() => selectNewCategory("Technology")} className={selectedCategory === "Technology" ? selectedClass : notSelectedClass}>Technology</li>
        </ul>
    </div>
}