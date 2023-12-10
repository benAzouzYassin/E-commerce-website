import { MainNav } from '@/components/dashboard/main-nav';
import { Search } from './dashboard/search';
import { UserNav } from './dashboard/user-nav';
import { ThemeToggle } from './ThemeToggle';

type AppPages = "Home" | "Products" | "Orders" | "Sales"

export default function Nav({ currentPage }: { currentPage: AppPages }) {
    return <nav className="flex h-16 items-center px-4 ">
        <MainNav className="ml-20 scale-110 font-medium" currentPage={currentPage} />
        <div className="ml-auto flex items-center  space-x-4">
            <Search />
            <UserNav />
            <ThemeToggle />
        </div>
    </nav>
}