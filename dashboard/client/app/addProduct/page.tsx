import Nav from "@/components/Nav"
import AddForm from "../../components/addProductPage/AddForm"

export default function Page() {

    return <main>
        <Nav currentPage="Products" />
        <h2 className="px-20  text-4xl mt-2 font-bold">Add product</h2>
        <AddForm />
    </main>
}