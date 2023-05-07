const fastify = require("fastify");
const formBody = require("@fastify/formbody");

const QrcodeRoute = require("./routes/qrcode");

const server = fastify();
server.register(formBody);
server.register(QrcodeRoute);

server.listen({
    port: process.env.PORT || 3000
})