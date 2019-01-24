
const joi = require('joi');
const db = require('../config/connection');
const jwt = require('jsonwebtoken');
const keys = require ('../config/key')


exports.rsvpAns = (req, res) => {
    const header = req.headers.authorization || req.body.token;
    const split = header.split(' ');
    const user = jwt.verify(split[1], keys.secret);
    const newResponse = {
       
        response: req.body.response,
    };
    db.query('SELECT * FROM meetups WHERE id_meetup=$1', [parseInt(req.params.meetup, 10)])
        .then((result) => {
            if (result.rows.length === 0) {
                return res.status(404).json({ error: 'sorry meetup not found' });
            }
            console.log(result.rows)
            db.query('INSERT INTO rsvp (user,meetup,response) VALUES($1,$2,$3) returning *',
                [user.id, parseInt(req.params.meetup, 10), newResponse.response])
                .then(response => res.json({ status: 201, response: response.rows }))
                .catch((er) => {
                    console.log(er);
                });
        })
        .catch((error) => {
            console.log(error);
        });
};