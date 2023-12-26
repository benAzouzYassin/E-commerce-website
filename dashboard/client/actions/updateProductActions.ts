"use server";
import { uploadProductImage } from "@/utils/firebase";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function fetchProduct(productId: string) {
    try {
      const backendUrl =process.env["BACKEND_URL"] + "/product/getOneById/" + productId;
      const { data : response } = await axios.get(backendUrl)
      return response;
      
    } catch (error : any) {
      return {data : {} , error  : error.message}
    }
  }
  
  
 export async function updateProduct(data: FormData) {
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
    const response = await axios.put(process.env["BACKEND_URL"] + "/product/updateOne/"+productId, updatedProduct)
      if(response.status !== 200) redirect("/updateError")  
      if(response.status === 200){
      revalidatePath("/products")
      redirect("/products")    
      }
  }
    
  }
  
 export async function fetchCategories() {
    "use server";
    const backendUrl = process.env["BACKEND_URL"];
    try {
      return await (
        await fetch(`${backendUrl}/category/getAll`, { cache: "no-cache" })
      ).json();
    } catch (error: any) {
      return { data: [], error: error.message };
    }
  }
  
  
  