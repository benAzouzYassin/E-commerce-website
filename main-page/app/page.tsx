import Image from "next/image"
import {ArrowRight } from "lucide-react"
import Nav from "@/components/shared/Nav"

export default function Home() {
  return (
    <main className='w-full h-[150vh] relative flex-col z-10 bg-background flex opacity-100'>
      <Nav/>

      <p className="text-center line-clamp-2 h-fit py-2  mt-20 font-bold text-5xl  z-50">Welcome To <span className=" font-black  bg-clip-text text-transparent bg-gradient-to-l from-amber-600 to-red-600">StoreName</span> 👋</p>
      <p className="text-center  font-bold text-xl mt-2 w-[40vw] mx-auto">Imagine all <button className="p-1   border-2 text-md font-medium shadow-sm scale-[85%] border-black px-2 rounded-[6px]">Clothing</button><button className="p-1   border-2 text-md font-medium shadow-sm scale-[85%] border-black px-2 rounded-[6px]">idk</button>  <button className="p-1   border-2 text-md font-medium shadow-sm scale-[85%] border-black px-2 rounded-[6px]">something</button><button className="p-1   border-2 text-md font-medium shadow-sm scale-[85%] border-black px-2 rounded-[6px]">something</button> <button className="p-1   border-2 text-md font-medium shadow-sm scale-[85%] border-black px-2 rounded-[6px]">something</button><button className="p-1   border-2 text-md font-medium shadow-sm scale-[85%] border-black px-2 rounded-[6px]">something</button><button className="p-1   border-2 text-md font-medium shadow-sm scale-[85%] border-black px-2 rounded-[6px]">something</button> <button className="p-1   border-2 text-md font-medium shadow-sm scale-[85%] border-black px-2 rounded-[6px]">something</button> at one place</p>
      <div className=" absolute top-0 right-0 h-[31rem] -z-10 lg:w-[60.25rem] rounded-full blur-[15rem] w-[68.75rem] bg-[#f5e888]"></div>
      <div className=" absolute top-10 left-0 h-[31rem] -z-10 lg:w-[40.25rem] rounded-full blur-[15rem] w-[68.75rem] bg-[#f1cdffce]"></div>
    </main>
  )
}
