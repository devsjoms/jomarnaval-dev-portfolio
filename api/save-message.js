const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {

    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method not allowed"
        });
    }

    const filePath = path.join(process.cwd(), "messages.json");

    let messages = [];

    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath);
        messages = JSON.parse(data);
    }

    messages.push(req.body);

    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

    res.status(200).json({
        success: true,
        message: "Message saved!"
    });
};