const qrcodeController = require("../controllers/QrcodeController");

async function QrcodeRoute(server) {
    server.get("/qrcode", qrcodeController.sendQrcode);
}

module.exports = QrcodeRoute;