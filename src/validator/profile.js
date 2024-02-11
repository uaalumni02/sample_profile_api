const Joi = require("@hapi/joi");

const schema = Joi.object({
  name: Joi.string().min(3).max(15).required(),
  bio: Joi.string().required(),
});

export default schema;
