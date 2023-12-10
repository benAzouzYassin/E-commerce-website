import Nav from '../../components/Nav';


export default async function page() {
    const data = await (await fetch("http://localhost/api/products.php")).json().catch(err => console.error(err))
    console.log(data)

    return <main>
        < Nav currentPage="Products" />
    </main>
}