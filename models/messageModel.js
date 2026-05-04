const fs = require("fs");
const path = require("node:path");

const filePath = path.join(__dirname, "../data/messages.json");

function loadMessages() {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function saveMessages(messages) {
  fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));
}

module.exports = {
  loadMessages,
  saveMessages
};