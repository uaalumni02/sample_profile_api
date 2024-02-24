const Joi = require("@hapi/joi");

const schema = Joi.object({
  name: Joi.string().min(3).max(15).required(),
  bio: Joi.string().required(),
  contact_info: Joi.string().required(),
  pronouns: Joi.string().required(),
  emergency_contact: Joi.string().required(),
  roles: Joi.string().required(),
  resume: Joi.string().required(),
});

export default schema;
