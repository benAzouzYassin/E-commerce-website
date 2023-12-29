"use client";
import React, { createContext, useContext, useState } from "react";
import { ProductType } from "@/services/productService";

export type CartItemType = {
    cartQuantity: number;
} & ProductType;

type ContextType = {
    addItem: (product: ProductType) => void;
    removeOneItem: (id: string) => void;
    removeAllItems: () => void;
    removeItemAllQuantity: (id: string) => void
    cartItems: CartItemType[];
    addQuantityToItem: (id: string, quantity: number) => void
    isCartOpen : boolean
    toggleCart : ()=>void
    closeCart : ()=>void
    openCart : ()=>void
};

const CartContext = createContext<ContextType | null>(null);

const getItemIndex = (itemId: string, items: CartItemType[]) => {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.id === itemId) return i;
    }
    return -1;
};

export function CartContextProvider({ children }: { children: React.ReactNode}) {
    const [cartItems, setCartItems] = useState<CartItemType[]>([]);
    const [isCartOpen , setIsCartOpen ]= useState(true)
    
    const toggleCart =()=> setIsCartOpen(!isCartOpen)
    const openCart =()=> setIsCartOpen(true)
    const closeCart =()=> setIsCartOpen(false)
    
    const addItem = (product: ProductType) => {
        const indexInCart = getItemIndex(product.id, cartItems);
        const exists = indexInCart !== -1;
        if (!exists) {
            setCartItems([...cartItems, { ...product, cartQuantity: 1 }]);
            return;
        }
        setCartItems((prev) => {
            const updatedItems = [...prev];
            updatedItems[indexInCart].cartQuantity += 1;
            return updatedItems;
        });
    };

    const removeOneItem = (id: string) => {
        const itemIndex = getItemIndex(id, cartItems)
        if (cartItems[itemIndex].cartQuantity === 1) {
            setCartItems(cartItems.filter(item => item.id !== id))
            return
        }
        setCartItems(cartItems.map(item => {
            const oldQuantity = item.cartQuantity
            return item.id === id ? { ...item, cartQuantity: oldQuantity - 1 } : item
        }
        ))

    };

    const removeAllItems = () => {
        setCartItems([]);
    };

    const addQuantityToItem = (id: string, quantity: number) => {
        setCartItems(cartItems.map(item => {
            const oldQuantity = item.cartQuantity
            return item.id === id ? { ...item, cartQuantity: oldQuantity + quantity } : item
        }
        ))
    };

    const removeItemAllQuantity = (id: string) => {
        setCartItems(prev => {
            return prev.filter(item => item.id !== id)
        })
    }
    return (
        <CartContext.Provider
            value={{ addItem, cartItems, removeAllItems, removeOneItem, addQuantityToItem, removeItemAllQuantity ,toggleCart , isCartOpen ,closeCart , openCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCartContext() {
    const context = useContext(CartContext);
    if (context === null) {
        throw new Error(
            "Cart context should be used within CartContextProvider!"
        );
    }
    return context;
}
