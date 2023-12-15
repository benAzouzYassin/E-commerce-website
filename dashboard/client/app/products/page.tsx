import { Input } from '@/components/ui/input';
import Nav from '../../components/Nav';
import { Search } from "lucide-react"
import Products from '../../components/products/Products';
import Link from 'next/link';

async function fetchCategories() {
    "use server"
    const backendUrl = process.env["BACKEND_URL"]
    try {
        return await ((await fetch(`${backendUrl}/category/getAll`, { cache: "no-cache" })).json())
    } catch (error: any) {
        return { data: null, error: error.message }
    }
}

async function fetchProducts() {
    "use server"
    const backendUrl = process.env["BACKEND_URL"]
    try {
        return await ((await fetch(`${backendUrl}/product/getAll`, { cache: "no-cache" })).json())
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
                {!productsErr && !categoriesErr && <Products categories={categories} products={products ?? []} />}
            </div>
        </section>
    </main>
}