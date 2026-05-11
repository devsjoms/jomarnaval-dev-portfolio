const fs = require("fs");
const path = require("path");

export default function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method Not Allowed"
        });
    }

    const filePath = path.join(process.cwd(), "messages.json");

    let messages = [];

    // Read existing messages
    if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath);
        messages = JSON.parse(fileData);
    }

    // Add new message
    messages.push(req.body);

    // Save updated messages
    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

    res.status(200).json({
        success: true,
        message: "Message saved!"
    });
}