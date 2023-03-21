const express = require("express");

const userSchema = require("../schemas/userSchema");
const validateBody = require("../middlewares/validateBody");
const { getUsers, addUser } = require("../controllers/users");

const router = express.Router();

router.get("/", getUsers);
router.post("/", validateBody(userSchema), addUser);

module.exports = router;
