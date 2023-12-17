/* eslint-disable @next/next/no-img-element */
import Nav from "@/components/Nav";
import CategorySelect from "@/components/shared/CategorySelect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import ImgField from "@/components/shared/ImgField";
import { Product } from "@/types/globalTypes";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { uploadProductImage } from "@/utils/firebase";
import { redirect } from "next/navigation";

async function fetchProduct(productId: string) {
  "use server";
  try {
    const backendUrl =process.env["BACKEND_URL"] + "/product/getOneById/" + productId;
    const { data : response } = await axios.get(backendUrl)
    return response;
    
  } catch (error : any) {
    return {data : null , error  : error.message}
  }
}


async function updateProduct(data: FormData) {
  "use server"
  const status = data.get("productStatus")?.toString() ?? ""
  const category = data.get("productCategory")?.toString() ?? ""
  const name = data.get("productName")?.toString() ?? ""
  const description = data.get("productDescription")?.toString() ?? ""
  const price = data.get("productPrice")?.toString() ?? ""
  const salePrice = data.get("productSalePrice")?.toString() ?? ""
  const stock = data.get("productStock")?.toString() ?? ""
  const imgFile = data.get("productImg")
  const oldImageLink = data.get("oldImgLink")
  const previewImgLink = data.get("previewImgLink")
  const isNewImg = previewImgLink !== oldImageLink && previewImgLink != ''
  const productId = data.get("productId")
  if(isNewImg){
     const imgLink = await uploadProductImage(imgFile)
     const updatedProduct = {
      additionalImages: [],
      description: description,
      imgLink: imgLink,
      name: name,
      price: Number(price),
      salePrice: salePrice ? Number(salePrice) : 0,
      status: status,
      categoryId: category,
      stock: Number(stock)
  }
  const response = await axios.put(process.env["BACKEND_URL"] + "/product/updateOne/" + productId, updatedProduct)
  if(response.status !== 200) redirect("/updateError")  
  if(response.status === 200){
    revalidatePath("/products")
    redirect("/products")
    }
  }else{
    const updatedProduct = {
      additionalImages: [],
      description: description,
      imgLink: oldImageLink,
      name: name,
      price: Number(price),
      salePrice: salePrice ? Number(salePrice) : 0,
      status: status,
      categoryId: category,
      stock: Number(stock)
  }
  console.log(updatedProduct)
  const response = await axios.put(process.env["BACKEND_URL"] + "/product/updateOne/"+productId, updatedProduct)
    if(response.status !== 200) redirect("/updateError")  
    if(response.status === 200){
    console.log(response)
    revalidatePath("/products")
    redirect("/products")    
    }
}
  
}

async function fetchCategories() {
  "use server";
  const backendUrl = process.env["BACKEND_URL"];
  try {
    return await (
      await fetch(`${backendUrl}/category/getAll`, { cache: "no-cache" })
    ).json();
  } catch (error: any) {
    return { data: null, error: error.message };
  }
}



export default async function Page({ params }: { params: { id: string } }) {
  const {data : productData , error : productErr} = (await fetchProduct(params.id)) as {data : Partial<Product> ,error : any } ;
  const { data: savedCategories, error: categoriesErr } = await fetchCategories();

  return (
    <main>
      <Nav currentPage="Products" />
      <h2 className="px-20  text-4xl mt-2 font-bold">Add product</h2>
      <form action={updateProduct}  className="flex px-20 mt-5  gap-x-5 h-[90vh]">
        {/**readOnly fields are used to pass required data to the actions */}
        <input type="text" readOnly value={params.id} className="hidden" name="productId"  />
        <div className="w-1/4  h-full">
          {/* the left section */}
          <div className=" w-full h-72  border-2 rounded-xl hover:cursor-pointer">
            <div className=" relative bg-accent-foreground/5 h-[220px] hover:bg-accent-foreground/10 transition-colors mx-auto mt-3 text-8xl text-foreground/50 text-center w-[90%] flex items-center justify-center border-foreground/50 border-2 border-dashed">
              <span className="absolute">+</span>
              <ImgField defaultUrl={productData?.imgLink ?? ""} />
            </div>
            <p className="ml-4 mt-3 font-medium line-clamp-2 pr-3"></p>
          </div>
          <div className="w-full h-fit pb-5 border-2 rounded-xl px-5  mt-5">
            <p className="text-2xl font-semibold mt-3">Options : </p>
            <hr className="mt-2" />
            <p className="mt-3 text-md mb-2 ml-1">Set Status</p>
            <Select name="productStatus" defaultValue={productData?.status}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={productData?.status} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup >
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
            <CategorySelect defaultCategory={productData?.category?.name ?? ""} savedCategories={savedCategories} />
          </div>
        </div>
        <div className="w-3/4 h-full">
          {/* the right section */}
          <div className="border-2 px-5 flex flex-col p-3 gap-3 h-fit w-full rounded-xl">
            <p className="font-bold  text-2xl">Product name</p>
            <p className="mt-5">Product Name</p>
            <Input
              name="productName"
              type="text"
              placeholder="Product name"
              required
              defaultValue={productData?.name}
            />
            <span>Product description</span>
            <Textarea
              name="productDescription"
              placeholder="product description"
              defaultValue={productData?.description}
              required
            />
            <span>Stock</span>
            <Input
              name="productStock"
              type="number"
              min={0}
              placeholder="Normal price"
              defaultValue={productData?.stock}
            />
            <span>Normal Price</span>
            <Input
              name="productPrice"
              type="number"
              min={0}
              placeholder="Normal price"
              defaultValue={productData?.price}
              required
            />
            <span>Sale Price</span>
            <Input
              name="productSalePrice"
              type="number"
              min={0}
              defaultValue={productData?.salePrice}
              placeholder="On Sale price"
            />
            <Button className="mt-5 font-semibold">Add product </Button>
          </div>
        </div>
      </form>
    </main>
  );
}