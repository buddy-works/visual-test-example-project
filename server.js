const Fastify = require("fastify");
const cors = require("@fastify/cors");
const staticFastify = require("@fastify/static");
const path = require("path");

const cwd = process.cwd();
const port = 4000;

const app = Fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
  bodyLimit: 50 * 1024 * 1024,
});

app.register(cors);
app.register(staticFastify, {
  root: path.join(cwd, "public"),
});

app.get("/", (request, reply) => {
  reply.sendFile("main.html");
});

app.get("/page", (request, reply) => {
  reply.sendFile("page.html");
});

app.listen({ port });
