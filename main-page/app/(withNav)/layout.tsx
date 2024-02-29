
import Nav from "@/components/shared/Nav";

export const metadata = {
    title: "Hg store",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Nav />
            <div className="w-full h-[10vh]"></div>
            {children}
        </>
    );
}
