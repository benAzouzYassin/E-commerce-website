import { MainNav } from '@/components/ui/main-nav';
import { UserNav } from './mainPage/UserNav';
import { ThemeToggle } from './ThemeToggle';

type AppPages = "Home" | "Products" | "Orders" | "Sales"

export default function Nav({ currentPage }: { currentPage: AppPages }) {
    return <nav className="flex h-16 items-center px-4 ">
        <MainNav className="ml-20 scale-110 font-medium" currentPage={currentPage} />
        <div className="ml-auto flex items-center  space-x-4">
            <UserNav />
            <ThemeToggle />
        </div>
    </nav>
}