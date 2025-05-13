import * as Joi from "joi";

export const logValidator = Joi.object({
    username: Joi.string().pattern(/^[A-Za-z]/).required().messages({
        "string.pattern.base":"Username must be a string",
    }),
    password: Joi.string().pattern(/^[A-Za-z]{8,}$/).required().messages({
        "string.pattern.base":"Password must be a string and min 8 chars",
    }),
})