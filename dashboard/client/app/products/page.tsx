import { fetchCategories, fetchProducts } from '@/actions/productsActions';
import Nav from '../../components/Nav';
import Products from '../../components/productsPage/Products';
import { Category } from '@/types/globalTypes';

export const revalidate = 1

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