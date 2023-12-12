import Nav from "@/components/Nav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import ImgField from "./ImgField"

export default async function Page({ params }: { params: { productId: string } }) {
    const fakeProduct = {
        "productId": 1,
        "name": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "imgLink": "https:\/\/fakestoreapi.com\/img\/81fPKd-2AYL._AC_SL1500_.jpg",
        "count": 120,
        "orderTimes": 3,
        "categoryId": "men's clothing",
        "salePrice": 0,
        "status": "published"
    }
    return <main>
        <Nav currentPage="Products" />
        <h2 className="px-20  text-4xl mt-2 font-bold">Add product</h2>
        <div className="flex px-20 mt-5  gap-x-5 h-[90vh]">
            <div className="w-1/4  h-full">
                {/* the left section */}
                <div className=" w-full h-72  border-2 rounded-xl hover:cursor-pointer" >
                    <div className=" relative bg-accent-foreground/5 h-[220px] hover:bg-accent-foreground/10 transition-colors mx-auto mt-3 text-8xl text-foreground/50 text-center w-[90%] flex items-center justify-center border-foreground/50 border-2 border-dashed">
                        <span className="absolute">+</span>
                        <ImgField />
                    </div>
                    <p className="ml-4 mt-3 font-medium line-clamp-2 pr-3">{fakeProduct.name}</p>
                </div>
                <div className="w-full h-fit pb-5 border-2 rounded-xl px-5  mt-5" >
                    <p className="text-2xl font-semibold mt-3">Options : </p>
                    <hr className="mt-2" />
                    <p className="mt-3 text-md mb-2 ml-1">Set Status</p>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="published">published</SelectItem>
                                <SelectItem value="on sale">on sale</SelectItem>
                                <SelectItem value="coming soon">coming soon</SelectItem>
                                <SelectItem value="hidden">hidden</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <p className="mt-3 text-md mb-2 ml-1">Set Category</p>
                    <hr className="mt-2" />
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="w-3/4 h-full">
                {/* the right section */}
                <div className="border-2 px-5 flex flex-col p-3 gap-3 h-fit w-full rounded-xl">
                    <p className="font-bold  text-2xl">Product name</p>
                    <p className="mt-5">Product Name</p>
                    <Input type="text" placeholder="Product name" required />
                    <span>Product description</span>
                    <Textarea placeholder="product description" required />
                    <span>Normal Price</span>
                    <Input type="number" min={0} placeholder="Normal price" />
                    <span>Sale Price</span>
                    <Input type="number" min={0} placeholder="On Sale price" />
                    <Button className="mt-11 font-semibold">Add product </Button>
                </div>
            </div>
        </div>
    </main>
}