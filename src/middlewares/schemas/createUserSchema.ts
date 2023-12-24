import Joi from "joi";

const createUserSchema = Joi.object({
  username: Joi.string().required().min(3),
  vocation: Joi.string().required().min(3),
  level: Joi.number().required().min(1),
  password: Joi.string().required().min(8)
}).messages({
  'any.required': '{#label} is required',
  'string.base': '{#label} must be a string',
  'number.base': '{#label} must be a number',
  'number.min': '{#label} must be greater than or equal to 1',
  'string.min': '{#label} length must be at least {#limit} characters long'
})

export default createUserSchema;