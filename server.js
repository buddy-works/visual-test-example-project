const Fastify = require("fastify");
const cors = require("@fastify/cors");
const staticFastify = require("@fastify/static");
const path = require("path");

const cwd = process.cwd();
const isCI = process.env.CI;
const port = 4322;

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

app.get("/error", (request, reply) => {
  reply.sendFile("error.html");
});

app.get("/crop", (request, reply) => {
  reply.sendFile("crop.html");
});

app.listen({ host: isCI ? '0.0.0.0' : 'localhost',  port });
