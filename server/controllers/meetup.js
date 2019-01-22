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
};
