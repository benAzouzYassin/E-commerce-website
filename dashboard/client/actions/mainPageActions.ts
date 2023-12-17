"use server"

import { DashboardData } from "@/types/globalTypes"

export async function getDashboardData(): Promise<{
    data: DashboardData | null,
    error: string | null
  }> {
    const backendUrl = process.env["BACKEND_URL"]
    try {
      return await ((await fetch(`${backendUrl}/dashboard/data`, { cache: "no-cache" })).json())
    } catch (error: any) {
      return { data: null, error: error.message }
    }
  }
  