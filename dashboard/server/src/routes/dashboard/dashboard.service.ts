import { prisma } from "../../utils/prisma";

export async function getVisitsCount() {
    const data = await prisma.visits.aggregate({
        _count: {
            _all: true
        }
    })
    return data._count._all
}
export async function getTotalRevenue() {
    const data = await prisma.order.aggregate({
        _sum: {
            orderPrice: true,
        },
    });
    return data._sum.orderPrice;
}

export async function getOrdersCount() {
    const data = await prisma.order.aggregate({
        where: {
            status: "waiting",
        },
        _count: {
            status: true,
        },
    });
    return data._count.status;
}

export async function getCanceledOrdersCount() {
    const data = await prisma.order.aggregate({
        where: {
            status: "canceled",
        },
        _count: {
            status: true,
        },
    });
    return data._count.status;
}

export async function getLastWeekOrders() {
    // the day that before the current day with 7 days
    const startDay = new Date(new Date().getDate() - 7);
    const results = {
        Sunday: 0,
        Monday: 0,
        Tuesday: 0,
        Wednesday: 0,
        Thursday: 0,
        Friday: 0,
        Saturday: 0,
    };
    //get last 7 days orders
    const ordersData = await prisma.order.findMany({
        where: {
            createdAt: {
                gte: startDay,
            },
        },
    });

    for (const order of ordersData) {
        const dateString = order.createdAt.toLocaleDateString("en-GB", {
            weekday: "long",
        });
        if (!results[dateString]) results[dateString] = 0;
        results[dateString] += 1;
    }
    return results;
}

export async function getLatestOrders() {
    const data = await prisma.order.findMany({
        where: { status: "waiting" },
        orderBy: [{ createdAt: "desc" }],
        take: 5,
    });
    return data;
}
