import { FastifyInstance } from "fastify"
import { getDataHandler } from "./dashboard.controller"

export async function dashboardRouter(server: FastifyInstance) {
    server.get("/data", getDataHandler)

}

