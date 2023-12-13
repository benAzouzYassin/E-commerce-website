import Nav from "@/components/Nav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

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
        <h2 className="px-20  text-4xl mt-2 font-bold">Update product</h2>
        <div className="flex px-20 mt-5  gap-x-5 h-[90vh]">
            <div className="w-1/4  h-full">
                {/* the left section */}
                <div className=" w-full h-72  border-2 rounded-xl hover:cursor-pointer" >
                    <img className="w-[180px] mx-auto mt-3 " src={fakeProduct.imgLink} alt={fakeProduct.name + "image"} />
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
                                <SelectItem value="onSale">on sale</SelectItem>
                                <SelectItem value="comingSoon">coming soon</SelectItem>
                                <SelectItem value="hidden">hidden</SelectItem>
                                <SelectItem value="soldOut">sold out</SelectItem>
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
                    <Input type="text" defaultValue={fakeProduct.name} placeholder="Product name" required />
                    <span>Product description</span>
                    <Textarea defaultValue={fakeProduct.description} placeholder="product description" required />
                    <span>Normal Price</span>
                    <Input type="number" defaultValue={fakeProduct.price} min={0} placeholder="Normal price" />
                    <span>Sale Price</span>
                    <Input defaultValue={fakeProduct.salePrice} type="number" min={0} placeholder="On Sale price" />
                    <Button className="mt-11 font-semibold">Update product </Button>
                </div>
            </div>
        </div>
    </main>
}
