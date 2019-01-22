const joi = require('joi');
const Extension = require('joi-date-extensions');

function validateRsvp(records) {
    const schema = {
        meetup: joi
            .number()
            .max(5)
            .required(),
        user: joi
            .number()
            .max(5)
            .required(),
        response: joi
            .string()
            .min(2)
            .allow('')
            .trim()
            .strict()
            .required(),
    };

    return joi.validate(records, schema);
}

const rsvps = [
    {
        id: 1,
        meetup: 1,
        user: 1,
        response: 'yes',
    },
    {
        id: 2,
        meetup: 2,
        user: 2,
        response: 'not sure',
    },
    {
        id: 3,
        meetup: 3,
        user: 3,
        response: 'no',
    },
];

class rsvp {
    static registersvp(req, res) {
        const { error } = validateRsvp(req.body);
        if (error) {
            return res.status(400).send({
                status: 400,
                error: error.details[0].message,
            });
        }
        const newRsvp = {
            id: rsvps.length + 1,
            meetup: req.body.meetup,
            user: req.body.user,
            response: req.body.response,
        };
        rsvps.push(newRsvp);
        return res.status(200).json({ status: 200, data: [newRsvp] });
    }

    static allrsvp(req, res) {
        res.status(200).json({
            status: 200,
            data: rsvps,
        });
    }
}

module.exports = rsvp;
