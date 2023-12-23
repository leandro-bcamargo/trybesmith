import Joi from "joi";

const validateLoginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
}).messages({
  'any.required': '{#label} is required'
})

export default validateLoginSchema;