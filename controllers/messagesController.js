const model = require("../models/messageModel");
const { v4: uuidv4 } = require("uuid");

// GET all messages
exports.getAllMessages = () => {
  return model.loadMessages();
};

// ADD message
exports.addMessage = (user, text) => {
  const messages = model.loadMessages();

  messages.push({
    id: uuidv4(),
    user,
    text,
    added: new Date().toISOString()
  });

  model.saveMessages(messages);
};

// GET one message by UUID
exports.getMessageById = (id) => {
  const messages = model.loadMessages();
  return messages.find(msg => msg.id === id);
};

// UPDATE message
exports.updateMessage = (id, user, text) => {
  const messages = model.loadMessages();

  const index = messages.findIndex(msg => msg.id === id);
  if (index === -1) return;

  messages[index] = {
    ...messages[index],
    user,
    text
  };

  model.saveMessages(messages);
};

// DELETE message
exports.deleteMessage = (id) => {
  const messages = model.loadMessages();
  const filtered = messages.filter(msg => msg.id !== id);
  model.saveMessages(filtered);
};