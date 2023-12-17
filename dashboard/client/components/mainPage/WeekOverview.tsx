"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

export function WeekOverview({ weekData }: { weekData: any }) {
    const [chartData, setChartData] = useState<{ name: any; total: any }[]>([])
    useEffect(() => {
        if (weekData) {
            console.log(weekData)
            const finalData = []
            for (const day in weekData) {
                finalData.push({ name: day, total: weekData[day] })
            }
            setChartData(finalData)
        }
    }, [weekData])

    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart data={chartData}>
                <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />

                0
                <YAxis

                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                />
                <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    )
}