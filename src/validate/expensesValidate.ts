import Joi from 'joi';

const schemaExpense = Joi.object({
  Description: Joi.string().max(191),
  User_id: Joi.string().required(),
  Data: Joi.date().max('now').iso(),
  Value: Joi.number().min(0),
});

export default schemaExpense;