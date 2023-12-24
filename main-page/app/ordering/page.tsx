"use client";

import { useCartContext } from "@/context/CartContext";
import CartItem from "../../components/shared/CartItem";
import { FormEvent, useState } from "react";
import { cn } from "@/lib/utils";
import { OrderItems } from "@/actions/orderingActions";
import { Loader2Icon } from "lucide-react"
import { useRouter } from "next/navigation";
import { Toaster, toast } from 'sonner';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ordering",
};

export default function Page() {
    const [userName, setUserName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [formError, setFormError] = useState({ userNameField: "", addressField: "", phoneNumberField: "" })
    const [isLoading, setIsLoading] = useState(false)

    const { cartItems , removeAllItems } = useCartContext();
    const router = useRouter()

    const price = cartItems.reduce((acc, curr) => {
        return curr.status === "on sale"
            ? acc + curr.salePrice * curr.cartQuantity
            : acc + curr.price * curr.cartQuantity;
    }, 0);
    const deliveryPrice = 7;


    const handleSubmit = (e: FormEvent) => {

        e.preventDefault()
        setFormError({ userNameField: "", addressField: "", phoneNumberField: "" })

        //validation
        let isValid = true
        const phoneNumberRegex = /^[2-9]\d{7}$/
        if (!phoneNumberRegex.test(phoneNumber)) {
            setFormError(prev => {
                return { ...prev, phoneNumberField: "Non valid phone number !" }
            })
            isValid = false
        }
        if (address.length < 4 || address.length > 100) {
            setFormError(prev => {
                return { ...prev, addressField: "Address is too short or too long !" }
            })
            isValid = false
        }
        if (userName.length < 4 || userName.length > 100) {
            setFormError(prev => {
                return { ...prev, userNameField: "Name is too short or too long !" }
            })
            isValid = false
        }
        const productsToOrder = cartItems.map(item => {
            return { productId: item.id, quantity: item.cartQuantity }
        })
        if (isValid) {
            OrderItems({ userName: userName, location: address, products: productsToOrder, userContact: phoneNumber })
                .then(data => {
                    setIsLoading(false)
                    removeAllItems()
                    router.replace("/thanks")
                }).catch(err => {
                    console.error(err)
                    setIsLoading(false)
                    toast.error("something went wrong !" , {duration : 200 })
                })
            setIsLoading(true)
        }

    };

    return (
        <main className="bg-white h-[100vh]">
            <p className=" absolute w-full text-center text-3xl font-black text-black/80"></p>
            <section className=" relative flex">
                <div className=" w-3/4 px-72">
                    <p className="w-full text-3xl font-black text-center mt-4">
                        HG STORE
                    </p>
                    <form onSubmit={handleSubmit} className="mt-20 flex flex-col gap-3">
                        <label className="font-bold text-md">
                            Name
                            <span className="font-black text-red-500/80">
                                *
                            </span>
                            :
                            <p className="font-medium text-red-500">{formError.userNameField}</p>
                            <input
                                type="text"
                                placeholder="Your name..."
                                className={cn("mt-2 pl-5 focus-within:outline-black/40  border-black/20 shadow-sm shadow-black/20 h-16 rounded border w-full ", { "border-red-400": formError.userNameField })}
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </label>

                        <label className="font-bold text-md">
                            Phone number
                            <span className="font-black text-red-500/80">
                                *
                            </span>
                            :
                            <p className="font-medium text-red-500">{formError.phoneNumberField}</p>
                            <input
                                type="text"
                                placeholder="Your phone number..."
                                className={cn("mt-2 pl-5 focus-within:outline-black/40  border-black/20 shadow-sm shadow-black/20 h-16 rounded border w-full ", { "border-red-400": formError.phoneNumberField })}
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </label>
                        <label className="font-bold text-md ">
                            Address
                            <span className="font-black text-red-500/80">
                                *
                            </span>
                            :
                            <p className="font-medium text-red-500">{formError.addressField}</p>
                            <input
                                type="text"
                                placeholder="Your Address"
                                className={cn("mt-2 pl-5 focus-within:outline-black/40  border-black/20 shadow-sm shadow-black/20 h-16 rounded border w-full ", { "border-red-400": formError.addressField })}
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </label>
                        <button className="mt-5 text-center bg-black text-white w-full  hover:bg-white hover:text-black transition-colors duration-300  ease-in-out hover:border-opacity-100 border-2 border-opacity-0 rounded-sm py-3 font-bold  ">
                            {isLoading ? <Loader2Icon className="mx-auto scale-125 stroke-[3px] opacity-80 spin" /> : "Order Now"}
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
                        Subtotal
                        <span className="font-medium ml-auto mr-5 ">
                            {price}$
                        </span>
                    </p>
                    <p className="flex  absolute bottom-10 w-[90%] font-bold items-center gap-2">
                        Total
                        <span className="text-xs font-medium text-neutral-400 ">
                            ({deliveryPrice}$ delivery)
                        </span>
                        <span className="font-medium ml-auto mr-5 ">
                            {price ? price + deliveryPrice : 0}$
                        </span>
                    </p>
                </article>
            </section>
            <Toaster theme="light"   richColors={true} />
        </main>
    );
}
