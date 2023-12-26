"use client"
import { getSecretKey } from "@/actions/otherActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner"
export default function Page() {
    const [secretKey, setSecretKey] = useState<string | undefined | null>(null)
    const [input, setInput] = useState<string>("")

    useEffect(() => {
        getSecretKey().then(key => setSecretKey(key))
    }, [])

    const handleClick = () => {
        if (input === secretKey) {
            toast.success("Valid key")
            localStorage.setItem("key", input)
            window.location.href = `/?key=${input}`
            return
        }
        toast.error("Wrong key please try again")
    }

    return <main className="flex h-[100vh] w-[100vw]">
        <section className="bg-[#09090B]  border w-full  h-full pt-[30vh] gap-5 border-[#27272A] flex-col p-10 flex items-center">
            <p className="text-2xl font-medium">Please Enter Your Secret Key</p>
            <p className="text-white/60 w-1/2 text-center">The secret should be handed to you by the creator of this website</p>
            <Input onChange={(e) => setInput(e.target.value)} className="w-[22vw]" placeholder="Your key.." />
            <Button onClick={handleClick} className="w-[18vw] font-bold text-md">Login</Button>
            <Toaster duration={1500} toastOptions={{ style: { fontSize: 18, fontWeight: 400 } }} richColors theme="dark" />
        </section>
    </main>
}