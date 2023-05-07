const fastify = require("fastify");

const QrcodeRoute = require("./routes/qrcode");

const server = fastify();
server.register(QrcodeRoute);

server.listen({
    port: process.env.PORT || 3000
})