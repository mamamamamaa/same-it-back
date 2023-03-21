const Joi = require("joi");

const userSchema = Joi.object({
  username: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  role: Joi.string().valid("admin", "employee").required(),
  state: Joi.string().valid("male", "female").required(),
});

module.exports = userSchema;
