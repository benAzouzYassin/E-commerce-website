"use client";

import { useCartContext } from "@/context/CartContext";
import CartItem from "../../components/shared/CartItem";

export default function Page() {
    const { cartItems } = useCartContext();

    return (
        <main className="bg-white h-[100vh]">
            <p className=" absolute w-full text-center text-3xl font-black text-black/80"></p>
            <section className=" relative flex">
                <div className=" w-3/4 px-72">
                    <p className="w-full text-3xl font-black text-center mt-4">
                        HG STORE
                    </p>
                    <form className="mt-20 flex flex-col gap-3">
                        <label className="font-bold text-md">Name<span className="font-black text-red-500/80">*</span> : 
                        <input
                            type="text"
                            placeholder="Your name..."
                            className="mt-2 pl-5 focus-within:outline-black/40  border-black/20 shadow-sm shadow-black/20 h-16 rounded border w-full "
                            />
                            </label>

                        <label className="font-bold text-md">Phone number<span className="font-black text-red-500/80">*</span> : 
                        <input
                            type="text"
                            placeholder="Your phone number..."
                            className="mt-2 pl-5 focus-within:outline-black/40  border-black/20 shadow-sm shadow-black/20 h-16 rounded border w-full "
                            />
                            </label>
                        <label className="font-bold text-md ">Address<span className="font-black text-red-500/80">*</span> :

                        <input
                            type="text"
                            placeholder="Your Address"
                            className="mt-2 pl-5 focus-within:outline-black/40  border-black/20 shadow-sm shadow-black/20 h-16 rounded border w-full "
                            />
                            </label>
                            <button
                                className=" mt-5 text-center bg-black text-white w-full  hover:bg-white hover:text-black transition-colors duration-300  ease-in-out hover:border-opacity-100 border-2 border-opacity-0 rounded-sm py-3 font-bold  ">
                                Order Now
                            </button>
                    </form>
                </div>
                <article className=" px-5  relative w-1/4 h-[100vh] bg-[#ffffff] border-2">
                    <p className="font-bold absolute top-20 ">
                        Purchase summary ({cartItems.length})
                    </p>
                    <div className="flex flex-col absolute  top-36 w-[90%] gap-4">
                        {cartItems.map((item) => (
                            <CartItem key={item.id} {...item} />
                        ))}
                    </div>
                    <p className="flex  absolute bottom-20 w-[90%] font-bold">
                        Subtotal{" "}
                        <span className="font-medium ml-auto mr-5 ">
                            55.90$
                        </span>{" "}
                    </p>
                    <p className="flex  absolute bottom-10 w-[90%] font-bold items-center gap-2">
                        Total{" "}
                        <span className="text-xs font-medium text-neutral-400 ">
                            (7$ delivery)
                        </span>{" "}
                        <span className="font-medium ml-auto mr-5 ">
                            62.90$
                        </span>{" "}
                    </p>
                </article>
            </section>
        </main>
    );
}
