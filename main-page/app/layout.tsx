
import { Inter } from "next/font/google";
import "./globals.css";
import { CartContextProvider } from "@/context/CartContext";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "Hg store",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.className}>
            <CartContextProvider>
                <body >{children}</body>
            </CartContextProvider>
        </html>
    );
}
