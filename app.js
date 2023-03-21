require("dotenv").config();

const cors = require("cors");
const express = require("express");

const app = express();

const usersRouter = require("./routes/users");

app.use(cors());
app.use(express.json());

app.use("/users", usersRouter);
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
