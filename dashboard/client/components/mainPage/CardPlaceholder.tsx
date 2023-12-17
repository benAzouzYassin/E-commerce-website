import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type Props = {
    title: "Total Revenue" | "Orders" | "Canceled" | "Visits"
    description: string
}

export default function CardPlaceholder(props: Props) {
    return <Card className="h-40 bg-foreground/5 animate-pulse">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-[22px] font-medium">
                {props.title}
            </CardTitle>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
            >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        </CardHeader>
        <CardContent>
            <div className="text-4xl mt-2 font-bold bg-accent-foreground/20 h-5 w-20 rounded-[2px] mb-3"></div>
            <p className="text-xs mt-1 text-muted-foreground">
                {props.description}
            </p>
        </CardContent>
    </Card>
}