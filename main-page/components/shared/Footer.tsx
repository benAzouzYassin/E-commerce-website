import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Footer() {
    return <footer className="mt-auto w-full px-20 h-fit overflow-hidden py-2 bg-black  flex flex-col lg:flex-row items-center text-white ">
        <div className="w-full text-[16px]  lg:text-xl  items-center gap-3  flex justify-center  text-center mx-auto  h-20 bg-black">
            <a className="text-white hover:underline underline-offset-4" href="#">About</a>
            <a className="text-white hover:underline underline-offset-4" href="#">Location</a>
            <a className="text-white hover:underline underline-offset-4" href="#">Facebook</a>
            <a className="text-white hover:underline underline-offset-4" href="#">Instagram</a>
            <a className="text-white hover:underline underline-offset-4" href="#">Youtube</a>
        </div>


        <form className="w-[100vw] lg:w-1/3  bg-black pb-5  gap-3 flex flex-col lg:flex-row items-center justify-center ">
            <label className="text-white  font-semibold text-lg px-10 lg:px-0  tracking-wider w-full ">

                <Input type="text" className="bg-white/90 rounded-full py-5  lg:w-[400px] text-black" placeholder="Subscribe to our news letter..." />
            </label>
            <Button className="text-lg rounded-xl lg:w-auto w-1/3 lg:px-5 h-9 hover:bg-white/70   bg-white text-black shadow-md shadow-white/5 font-semibold ">Subscribe</Button>
        </form>

    </footer>
}