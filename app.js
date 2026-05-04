const express = require("express");
const path = require("node:path");

const app = express();

// EJS setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));

// Static files (CSS, images, JS)
app.use(express.static(path.join(__dirname, "public")));

// Routes
const indexRouter = require("./routes/indexRouter");
app.use("/", indexRouter);

app.use((req, res) => {
  res.status(404).render("404");
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});