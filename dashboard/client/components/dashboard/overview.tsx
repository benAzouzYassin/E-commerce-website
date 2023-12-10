"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
    {
        name: "Monday",
        total: Math.floor(Math.random() * 100) + 1000,
    },
    {
        name: "Tuesday",
        total: Math.floor(Math.random() * 1000) + 1000,
    },
    {
        name: "Wednesday",
        total: Math.floor(Math.random() * 500) + 1000,
    },
    {
        name: "Thursday",
        total: Math.floor(Math.random() * 100) + 1000,
    },
    {
        name: "Friday",
        total: Math.floor(Math.random() * 100) + 1000,
    },
    {
        name: "Saturday",
        total: Math.floor(Math.random() * 300) + 1000,
    },
    {
        name: "Sunday",
        total: Math.floor(Math.random() * 100) + 1000,
    },

]

export function Overview() {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
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