
import { Blinker } from "next/font/google"
import "./globals.css";
import { CartContextProvider } from "@/context/CartContext";
import Nav from "@/components/shared/Nav";
import Footer from "@/components/shared/Footer";
const blinker = Blinker({ subsets: ["latin"], weight: ["300", "400", "600", "700", "800"] })

export const metadata = {
    title: "Hg store",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={blinker.className}>
            <CartContextProvider>
                <body >
                    <Nav />
                    {children}
                    <Footer />

                </body>
            </CartContextProvider>
        </html>
    );
}
