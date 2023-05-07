const qrcode = require("qrcode");

async function sendQrcode(request, response) {
    const url = request.query.url;

    try {
        const qrcodeImage = await qrcode.toDataURL(url);
        return response.code(200).send(`<img src="${qrcodeImage}">`);
    } catch {
        return response.code(500).send("Internal Server Error");
    }
}

module.exports = {
    sendQrcode
};