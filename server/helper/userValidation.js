const joi = require('joi');
const extension = require('joi-date-extensions');

const extJoi = joi.extend(extension);


module.exports = {
    validationUser: (records) => {
        const schema = {
            firstname: joi
                .string()
                .min(2)
                .allow('')
                .trim()
                .strict()
                .required(),
            lastname: joi
                .string()
                .min(2)
                .allow('')
                .trim()
                .strict()
                .required(),
            othername: joi
                .string()
                .min(2)
                .allow('')
                .trim()
                .strict(),
            email: joi
                .string()
                .allow('')
                .trim()
                .strict()
                .email({ minDomainAtoms: 2 })
                .required(),
            phonenumber: joi
                .number(),
            username: joi
                .string()
                .min(2)
                .max(15)
                .allow('')
                .trim()
                .strict()
                .required(),
            password: joi.string().required(),
        };

        return joi.validate(records, schema);
    },
};
