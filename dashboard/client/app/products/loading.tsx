import {Loader2Icon} from "lucide-react"

export default function Page() {
    return <main className="flex items-center justify-center w-[100vw] h-[85vh]" >
        <Loader2Icon width={300} height={300} className="stroke-[1px] animate-spin" />
    </main>
}