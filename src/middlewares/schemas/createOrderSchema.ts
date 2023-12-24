import Joi from "joi";

const createOrderSchema = Joi.object({
  productsIds: Joi.array().items(Joi.number()).min(1).required().messages({
    'any.required': '{#label} is required',
    'array.base': '{#label} must be an array',
    'array.min': '{#label} must include only numbers',
    'number.base': '{#label} must include only numbers',
  })
});

export default createOrderSchema;