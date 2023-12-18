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
        },where : {status : "sent"}
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

function getPast7DaysNames() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const past7DaysObject = {};
    for (let i = 6; i >= 0; i--) {
      const pastDay = new Date(today);
      pastDay.setDate(today.getDate() - i);
      const dayName = daysOfWeek[pastDay.getDay()];
      past7DaysObject[dayName] = 0;
    }
    return past7DaysObject;
  }
  



export async function getLastWeekOrders() {
    // the day that before the current day with 7 days
    const startDay = new Date(new Date().getDate() - 7);
    const results = getPast7DaysNames()
    //get last 7 days orders
    const ordersData = await prisma.order.findMany({
        where: {
            createdAt: {
                gte: startDay,
            },
            NOT : {status : "canceled"}
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
