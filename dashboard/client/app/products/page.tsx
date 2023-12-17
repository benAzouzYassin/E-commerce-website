import Nav from '../../components/Nav';
import Products from '../../components/productsPage/Products';
import { Category } from '@/types/globalTypes';

async function fetchCategories() {
    "use server"
    const backendUrl = process.env["BACKEND_URL"]
    try {
        return await ((await fetch(`${backendUrl}/category/getAll`)).json())
    } catch (error: any) {
        return { data: null, error: error.message }
    }
}

async function fetchProducts() {
    "use server"
    const backendUrl = process.env["BACKEND_URL"]
    try {
        return await ((await fetch(`${backendUrl}/product/getAll`)).json())
    } catch (error: any) {
        return { data: null, error: error.message }
    }
}

export default async function Page() {
    const { data: products, error: productsErr } = await fetchProducts()
    const { data: categories, error: categoriesErr } = await fetchCategories()

    return <main>
        < Nav currentPage="Products" />
        <section className='px-16'>
            <div className=' mt-5 p-5 bg-background rounded-lg min-h-[80vh] shadow-sm border-black'>
                {!productsErr && !categoriesErr && <Products categories={categories.map((c: Category) => c.name)} products={products ?? []} />}
            </div>
        </section>
    </main>
}