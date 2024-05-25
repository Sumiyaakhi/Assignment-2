import Joi from "joi";

const productValidationSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().positive().required(),
  category: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).required(),
  variants: Joi.array()
    .items(
      Joi.object({
        type: Joi.string().required(),
        value: Joi.string().required(),
      })
    )
    .required(),
  inventory: Joi.object({
    quantity: Joi.number().integer().min(0).required(),
    inStock: Joi.boolean().required(),
  }).required(),
});

export default productValidationSchema;
