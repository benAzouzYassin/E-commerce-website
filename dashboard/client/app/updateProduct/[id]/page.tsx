import Nav from "@/components/Nav";
import { Product } from "@/types/globalTypes";
import { fetchCategories, fetchProduct } from "@/actions/updateProductActions";
import UpdateForm from "@/components/updateProduct/UpdateForm";

export default async function Page({ params }: { params: { id: string } }) {
  const {data : productData , error : productErr} = (await fetchProduct(params.id)) as {data : Partial<Product> ,error : any } ;
  const { data: savedCategories, error: categoriesErr } = await fetchCategories();

  return (
    <main>
      <Nav currentPage="Products" />
      <h2 className="px-20  text-4xl mt-2 font-bold">Add product</h2>
      {productData ? <UpdateForm productData={productData} savedCategories={savedCategories}  /> : "error loading the product data"}

    </main>
  );
}