"use client"

type Props = {
    selectedCategory: string
    categories: string[]
    selectNewCategory: (category: string) => void
}



export default function Categories({ selectNewCategory, selectedCategory, categories }: Props) {
    const selectedClass = "bg-muted-foreground/20 p-2 rounded-full hover:cursor-pointer"
    const notSelectedClass = "p-2 hover:bg-muted-foreground/10 hover:cursor-pointer rounded-full"
    return <div className="text-foreground/80 flex mt-6 ml-2">
        <span className=" font-semibold p-2">ALL CATEGORIES :</span>
        <ul className="flex gap-x-6 ml-4 font-medium ">
            <li onClick={() => selectNewCategory("All Products")} className={selectedCategory === "All Products" ? selectedClass : notSelectedClass}>All Products</li>
            {categories.map(category => <li key={category} onClick={() => selectNewCategory(category)} className={selectedCategory === category ? selectedClass : notSelectedClass} >{category}</li>)}
        </ul>
    </div>
}