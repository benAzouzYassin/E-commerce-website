import { prisma } from "../../utils/prisma";

export async function getVisitsCount() {
    const data = await prisma.visits.aggregate({
        _count: {
            _all: true
        }
    })
    return data._count._all
}
