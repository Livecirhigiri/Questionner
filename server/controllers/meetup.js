const pool = require('../config/connection');

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
        );
    },

    registerMeetup: (req, res) => {
        const {
 createdon, image, topic, hapeningon, tags 
} = req.body;
        pool.query(
            'INSERT INTO meetups (createdon,image, topic, hapeningon, tags) VALUES ($1,$2,$3,$4,$5) returning *',
            [createdon, image, topic, hapeningon, tags],
            (err, res) => {
                if (err) {
                    throw err;
                } else {
                    res.status(201).json({
                        status: 201,
                        data: [req.body],
                    });
                }
            },
        );
    },
};
