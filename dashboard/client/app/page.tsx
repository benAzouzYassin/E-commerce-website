import { Metadata } from "next"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,

} from "@/components/ui/tabs"
import { WeekOverview } from "@/components/dashboard/WeekOverview"
import { RecentOrders } from "@/components/dashboard/recent-sales"

import Nav from "@/components/Nav"
import DashboardCard from "@/components/dashboard/DashboardCard"
import { DashboardData } from "@/types/backendDataTypes"

export const metadata: Metadata = {
  title: "Dashboard",
}

async function getDashboardData(): Promise<{
  data: DashboardData | null,
  error: string | null
}> {
  "use server"
  const backendUrl = process.env["BACKEND_URL"]
  try {
    return await ((await fetch(`${backendUrl}/dashboard/data`, { cache: "no-cache" })).json())
  } catch (error: any) {
    return { data: null, error: error.message }
  }
}

export default async function DashboardPage() {
  const { data, error } = await getDashboardData()
  return (
    <>
      <div className="md:hidden" >
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div  >
      <div className="hidden flex-col dark:bg-black  md:flex">
        <div className="border-b">
          <Nav currentPage="Home" />
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6  px-20   ">
          <div className="flex items-center justify-between  space-y-2">
            <div className="flex items-center space-x-2">
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <DashboardCard title="Total Revenue" data={data ? "$" + Number(data.revenue).toFixed(2) : ""} description="Total orders prices" />
                <DashboardCard title="Orders" data={data ? data.ordersCount : ""} description="Total unhandled orders" />
                <DashboardCard title="Canceled" data={data ? data.canceledOrdersCount : ""} description="Orders that are canceled" />
                <DashboardCard title="Visits" data={data ? data.visits : ""} description="Total website visits" />
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Last Week Orders</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <WeekOverview weekData={data?.lastWeekOrders ?? {}} />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>
                      New orders waiting for validation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentOrders latestOrders={data?.latestOrders ?? []} />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div >
    </>
  )
}