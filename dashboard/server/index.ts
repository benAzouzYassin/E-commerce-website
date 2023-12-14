import Fastify from "fastify";
import { categoryRouter } from "./src/modules/category/category.router";
import { categorySchemas } from "./src/modules/category/category.schema";
import { productSchemas } from "./src/modules/product/product.schema";
import { productRouter } from "./src/modules/product/product.router";
import { dashboardRouter } from "./src/modules/dashboard/dashboard.router"
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from "@fastify/swagger-ui";

//TODO document the apis

const server = Fastify({
  logger: false,
});

for (const schema of [...categorySchemas, ...productSchemas]) {
  server.addSchema(schema)
}

///
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





async function start() {
  const address = await server.listen({ port: 3001, host: "0.0.0.0" });
  server.swagger();
}

start().catch((err) => {
  server.log.error(err);
  process.exit(1);
});
