const joi = require('joi');
const Extension = require('joi-date-extensions');

const Exjoi = joi.extend(Extension);

module.exports = {
    validationMeetup: (records) => {
        const schema = {
            createdOn: Exjoi.date().format('YYYY-MM-DD'),
            location: joi
                .string()
                .allow('')
                .trim()
                .strict()
                .min(2)
                .required(),
            image: joi
                .string()
                .min(2)
                .allow('')
                .trim()
                .strict(),
            topic: joi
                .string()
                .min(2)
                .allow('')
                .trim()
                .strict()
                .required(),
            happeningon: Exjoi.date().format('YYYY-MM-DD'),
            tags: joi.string().min(2),
        };

        return joi.validate(records, schema);
    },
};
