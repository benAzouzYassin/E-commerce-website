import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Footer() {
    return <footer className="mt-auto h-fit py-2 bg-black  flex items-center text-white  w-full">
        <div className="w-full text-xl  items-center gap-5  flex justify-center  text-center mx-auto  h-20 bg-black">
            <a className="text-white hover:underline underline-offset-4" href="#">About</a>
            <a className="text-white hover:underline underline-offset-4" href="#">Location</a>
            <a className="text-white hover:underline underline-offset-4" href="#">Facebook</a>
            <a className="text-white hover:underline underline-offset-4" href="#">Instagram</a>
            <a className="text-white hover:underline underline-offset-4" href="#">Youtube</a>
        </div>


        <form className="w-full  bg-black  gap-3 flex items-center justify-center ">
            <label className="text-white  font-semibold text-lg  tracking-wider ">

                <Input type="text" className="bg-white/90 rounded-full py-5 w-[400px] text-black" placeholder="Subscribe to our news letter..." />
            </label>
            <Button className="text-lg rounded-xl px-5 h-9 hover:bg-white/70   bg-white text-black shadow-md shadow-white/5 font-semibold ">Subscribe</Button>
        </form>

    </footer>
}