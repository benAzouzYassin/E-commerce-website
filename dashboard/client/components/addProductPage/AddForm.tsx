"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import ImgField from "../shared/ImgField"
import CategorySelect from '../shared/CategorySelect';
import { createNewProduct, fetchCategories } from "@/actions/addProductActions"
import { useFormStatus } from 'react-dom';
import { Loader2Icon } from "lucide-react"
import { useEffect, useState } from "react"
import { Category } from "@/types/globalTypes"


export default function AddForm() {
    const { pending } = useFormStatus()
    const [savedCategories, setSavedCategories] = useState<Category[]>([])
    useEffect(()=>{

        fetchCategories()
        .then(data => setSavedCategories(data.data))
        .catch(err => console.log(err))

    }, [])
    return   <form action={createNewProduct} className="flex px-20 mt-5  gap-x-5 h-[90vh]">
    <div className="w-1/4  h-full">
        {/* the left section */}
        <div className=" w-full h-72  border-2 rounded-xl hover:cursor-pointer" >
            <div className=" relative bg-accent-foreground/5 h-[220px] hover:bg-accent-foreground/10 transition-colors mx-auto mt-3 text-8xl text-foreground/50 text-center w-[90%] flex items-center justify-center border-foreground/50 border-2 border-dashed">
                <span className="absolute">+</span>
                <ImgField required={true} defaultUrl="" />
            </div>
            <p className="ml-4 mt-3 font-medium line-clamp-2 pr-3"></p>
        </div>
        <div className="w-full h-fit pb-5 border-2 rounded-xl px-5  mt-5" >
            <p className="text-2xl font-semibold mt-3">Options : </p>
            <hr className="mt-2" />
            <p className="mt-3 text-md mb-2 ml-1">Set Status</p>
            <Select name="productStatus">
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="published">published</SelectItem>
                        <SelectItem value="on sale">on sale</SelectItem>
                        <SelectItem value="coming soon">coming soon</SelectItem>
                        <SelectItem value="hidden">hidden</SelectItem>
                        <SelectItem value="sold out">sold out</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <p className="mt-3 text-md mb-2 ml-1">Set Category</p>
            <hr className="mt-2" />
            <CategorySelect defaultCategory="" savedCategories={savedCategories} />
        </div>
    </div>
    <div className="w-3/4 h-full">
        {/* the right section */}
        <div className="border-2 px-5 flex flex-col p-3 gap-3 h-fit w-full rounded-xl">
            <p className="font-bold  text-2xl">Product name</p>
            <p className="mt-5">Product Name</p>
            <Input name="productName" type="text" placeholder="Product name" required />
            <span>Product description</span>
            <Textarea name="productDescription" placeholder="product description" required />
            <span>Stock</span>
            <Input name="productStock" type="number" min={0} placeholder="Product Stock" required />
            <span>Normal Price</span>
            <Input name="productPrice" type="number" min={0} placeholder="Normal price" required />
            <span>Sale Price</span>
            <Input name="productSalePrice" type="number" min={0} placeholder="On Sale price" required />
            <Button disabled={pending} className="mt-11 font-semibold">{pending ? <Loader2Icon className="animate-spin" /> : "Add product"} </Button>                </div>
    </div>
</form>
}
