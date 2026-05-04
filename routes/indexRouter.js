const { Router } = require("express");
const router = Router();

const controller = require("../controllers/messagesController");

// Home
router.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Message Board",
    messages: controller.getAllMessages()
  });
});

// New form
router.get("/new", (req, res) => {
  res.render("form");
});

// Create
router.post("/new", (req, res) => {
  const { messageUser, messageText } = req.body;
  controller.addMessage(messageUser, messageText);
  res.redirect("/");
});

// Read one
router.get("/messages/:id", (req, res) => {
  const message = controller.getMessageById(req.params.id);

  if (!message) {
    return res.status(404).render("404");
  }

  res.render("message", {
    message
  });
});

// Edit page
router.get("/messages/:id/edit", (req, res) => {
  const message = controller.getMessageById(req.params.id);

  if (!message) {
    return res.status(404).render("404");
  }

  res.render("edit", {
    message
  });
});

// Update
router.post("/messages/:id/edit", (req, res) => {
  controller.updateMessage(
    req.params.id,
    req.body.messageUser,
    req.body.messageText
  );
  res.redirect("/");
});

// Delete
router.post("/messages/:id/delete", (req, res) => {
  controller.deleteMessage(req.params.id);
  res.redirect("/");
});

module.exports = router;