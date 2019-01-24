const joi = require('joi');
const Extension = require('joi-date-extensions');
// const datetime = require('date-time');

const Exjoi = joi.extend(Extension);

module.exports = {
    validationQuestion: (records) => {
        const schema = {
            createdby: joi
                .string()
                .allow('')
                .trim()
                .strict()
                .min(2)
                .required(),
            meetup: joi.number().max(5),
            topic: joi
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
            upvotes: joi.number().max(5),
            downvotes: joi.number().max(5),
        };

        return joi.validate(records, schema);
    },
};
