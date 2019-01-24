const datetime = require('date-time');
const pool = require('../config/connection');
const meetupValid=require("../helper/meetupVald");

module.exports = {
    getMeetup: (req, res) => {
        pool.query('SELECT * FROM meetups', (err, result) => {
            if (err) {
                throw err;
            }
            res.status(200).json({
                status: 200,
                data: result.rows,
            });
        });
    },

    meetupId: (req, res) => {
        const id_meetup = parseInt(req.params.id, 10);
        pool.query(
            'SELECT * FROM meetups WHERE id_meetup = $1',
            [id_meetup],
            (err, result) => {
                if (err) {
                    throw err;
                }
                if (result.rows.length === 0) {
                    return res.status(404).json({
                        status: 404,
                        error: 'user not found',
                    });
                }
                res.status(200).json({
                    status: 200,
                    data: result.rows,
                });
            },
        )
    },

    registerMeetup: (req, res) => {
        const { error } = meetupValid.validationMeetup(req.body);
        if (error)
          return res.status(400).send({
            status: 400,
            error: error.details[0].message
     });
        if (!error) {
        const {
 createdon, images, topic, hapeningon, tags 
} = req.body;
        pool.query(
            'INSERT INTO meetups (images, createdon, topic, happeningon, tags) VALUES ($1,$2,$3,$4,$5) RETURNING *',
            [images, createdon, topic, hapeningon, tags],
            (err, result) => {
                if (err) {
                    throw err;
                } else {
                    return res.json({
                        status: 200,
                        data: [req.body],
                    });
                }
            },
        );
    }
},

updateMeetup: (req, res) => {
    const { error } = meetupValid.validationMeetup(req.body);
    if (error)
      return res.status(400).send({
        status: 400,
        error: error.details[0].message
 });
    if (!error) {
        const id_meetup = parseInt(req.params.id_meetup, 10);

        const {
 createdon, images, topic, happeningon, tags 
} = req.body;

        pool.query(
            'UPDATE meetups SET createdon = $1, images = $2, topic = $3 , happeningon=$4, tags=$5 WHERE id_meetup = $6',
            [createdon, images, topic, happeningon, tags, id_meetup],
            (err, results) => {
                if (err) {
                    throw err;
                }
                res.status(200).json({
                    status: 200,
                    data: [req.body],
                });
            },
        );
    }
},
    deleteMeetup: (req, res) => {
        const id_meetup = parseInt(req.params.id_meetup, 10);

        pool.query(
            'DELETE FROM meetups WHERE id_meetup = $1',
            [id_meetup],
            (err, results) => {
                if (err) {
                    throw err;
                }

                res.status(200).json({
                    status: 200,
                    data: `meetUp deleted with ID: ${id_meetup}`,
                });
            },
        );
    },

Upcomingmeetup: (req, res) => {
        const current = datetime();
        pool.query('SELECT * FROM meetups WHERE happeningon > $1', [current] ,(err, result) => {
            if (err) {
                throw err;
            }
            res.status(200).json({
                status: 200,
                data: result.rows,
            })
        });
    },
};
