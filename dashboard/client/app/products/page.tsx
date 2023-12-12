import { Input } from '@/components/ui/input';
import Nav from '../../components/Nav';
import { Search } from "lucide-react"
import Products from '../../components/products/Products';
import Link from 'next/link';

export default async function Page() {
    const productsData = await (await fetch("http://localhost/api/products.php")).json().catch(err => console.error(err))

    return <main>
        < Nav currentPage="Products" />
        <section className='px-16'>
            <div className=' mt-5 p-5 bg-background rounded-lg min-h-[80vh] shadow-sm border-black'>
                <div className='flex '>
                    <h2 className='text-5xl mt-[-10px] font-semibold'>Products</h2>
                    <div className=' ml-auto relative flex items-center '>
                        <Search className='absolute left-2 scale-110 stroke-foreground/70 ' />
                        <Input className='pl-8' type='text' placeholder='search product' />
                    </div>
                    <button className=" ml-10 border-2 px-3 rounded-md dark:font-normal font-medium border-foreground   before:ease relative  overflow-hidden py-2   transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-foreground before:opacity-10 before:duration-700  hover:before:-translate-x-40">
                        <Link href={"/addProduct"} className="relative z-10">Add new product +</Link>
                    </button>
                </div>
                <Products products={productsData} />
            </div>
        </section>
    </main>
}