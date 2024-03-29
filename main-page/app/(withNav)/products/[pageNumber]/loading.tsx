import Loader from "@/components/shared/Loader";


export const metadata = {
    title: "products",
};

export const dynamic = 'force-dynamic'

export default async function Loading() {

    return (
        <main className="w-[100vw] top-0 left-0  overflow-hidden absolute h-[100vh] items-center justify-center flex-col z-[999] bg-[#fafafa] flex opacity-100">
            <Loader className=" w-10 h-10 lg:w-20 lg:h-20 border-4 lg:border-[10px]" />
        </main>
    );
}
