const express = require("express");

const { userSchema, updateUserSchema } = require("../schemas/userSchema");
const validateBody = require("../middlewares/validateBody");
const ctrl = require("../controllers/users");

const router = express.Router();

router.get("/", ctrl.getUsers);
router.post("/", validateBody(userSchema), ctrl.addUser);
router.put("/:id", validateBody(updateUserSchema), ctrl.updateUser);
router.delete("/:id", ctrl.deleteUser);

module.exports = router;
