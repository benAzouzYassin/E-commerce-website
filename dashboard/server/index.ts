import Fastify from "fastify";
import { categoryRouter } from "./src/modules/category/category.router";
import { categorySchemas } from "./src/modules/category/category.schema";
import { productSchemas } from "./src/modules/product/product.schema";
import { productRouter } from "./src/modules/product/product.router";
import { dashboardRouter } from "./src/modules/dashboard/dashboard.router";

const server = Fastify({
  logger: false,
});

for (const schema of [...categorySchemas, ...productSchemas]) {
  server.addSchema(schema)
}


server.register(categoryRouter, { prefix: "/category" })
server.register(dashboardRouter, { prefix: "/dashboard" })
server.register(productRouter, { prefix: "/product" })

server.listen({ port: 3000, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  console.log(`Server is now listening on ${address}`);
});
