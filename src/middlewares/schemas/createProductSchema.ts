import Joi from "joi";

const createProductSchema = Joi.object({
  name: Joi.string().required().min(3),
  amount: Joi.string().required().min(3),
}).messages({
  'any.required': '{#label} is required',
  'string.base': '{#label} must be a string',
  'string.min': '{#label} length must be at least 3 characters long',
})

export default createProductSchema;