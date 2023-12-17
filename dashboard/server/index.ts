import Fastify from "fastify";
import { categoryRouter } from "./src/routes/category/category.router";
import { createCategorySchemas } from "./src/routes/category/category.schema";
import { createProductSchemas } from "./src/routes/product/product.schema";
import { createOrderSchemas } from "./src/routes/order/order.schema";
import { productRouter } from "./src/routes/product/product.router";
import { dashboardRouter } from "./src/routes/dashboard/dashboard.router"
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from "@fastify/swagger-ui";
import { orderRouter } from "./src/routes/order/order.router";
import { prisma } from "./src/utils/prisma";

const server = Fastify({
  logger: false,
});

for (const schema of [...createCategorySchemas, ...createOrderSchemas, ...createProductSchemas]) {
  server.addSchema(schema)
}

const swaggerOptions = {
  swagger: {
    info: {
      title: "E-commerce Dashboard Backend",
      version: "1.0.0",
    },
    host: "0.0.0.0",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [{ name: "Default", description: "Default" }],
  },
};

const swaggerUiOptions = {
  routePrefix: "/docs",
  exposeRoute: true,
};

//Swagger documentation plugins
server.register(fastifySwagger, swaggerOptions);
server.register(fastifySwaggerUi, swaggerUiOptions);

//Routes
server.register(categoryRouter, { prefix: "/category" })
server.register(dashboardRouter, { prefix: "/dashboard" })
server.register(productRouter, { prefix: "/product" })
server.register(orderRouter, { prefix: "/order" })

async function start() {
  const address = await server.listen({ port: 5500, host: "0.0.0.0" });
  console.log("server is live on ", address)
  server.swagger();
}

start().catch((err) => {
  server.log.error(err);
  process.exit(1);
});
