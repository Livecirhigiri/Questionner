const joi = require('joi');
const Extension = require('joi-date-extensions');
// const datetime = require('date-time');

const Exjoi = joi.extend(Extension);

module.exports = {
    validationQuestion: (records) => {
        const schema = {
            user: joi
                .string()
                .allow('')
                .trim()
                .strict()
                .min(2)
                .required(),
            meetup: joi.number().max(5),
            tittle: joi
                .string()
                .allow('')
                .trim()
                .strict()
                .min(2)
                .required(),
            body: joi
                .string()
                .min(2)
                .allow('')
                .trim()
                .strict()
                .required(),
        };

        return joi.validate(records, schema);
    },
};
