import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Order } from "@/types/globalTypes";

export function RecentOrders(props: { latestOrders: Order[] }) {
    return (
        <div className="space-y-8">
            {props.latestOrders.map((order) => (
                <RecentOrdersItem
                    price={order.orderPrice}
                    userContact={order.userContact}
                    userName={order.userName}
                    key={order.id}
                />
            ))}
        </div>
    );
}

function RecentOrdersItem(props: {
    userName: string;
    userContact: string;
    price: string;
}) {
    const userAvatar = (props.userName[0] + props.userName[1]).toUpperCase();
    return (
        <div className="flex items-center">
            <Avatar className="h-9 w-9">
                <AvatarFallback className="text-black">{userAvatar}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{props.userName}</p>
                <p className="text-sm text-muted-foreground">{props.userContact}</p>
            </div>
            <div className="ml-auto font-medium">
                {props.price} <span className="font-bold">TND</span>
            </div>
        </div>
    );
}
