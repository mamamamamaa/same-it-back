const express = require("express");
const { getAll } = require("../controllers/users");

const router = express.Router();

router.get("/", getAll);

module.exports = router;
