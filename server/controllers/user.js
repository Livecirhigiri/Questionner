//const datetime = require('date-time');
const pool = require('../config/connection');

module.exports = {

    getUsername: (req, res) => {
        const username = req.params.username;
        pool.query('SELECT * FROM users WHERE username=$1', [username])
            .then((users) => {
                if (users.rows.length === 0) {
                    return res.status(404).json({ error: 'user not found' });
                }
                return res.json({ users: users.rows });
            })
            .catch((error) => {
                console.log(error);
            });
    },

    getUser: (req, res) => {
        pool.query('SELECT * FROM users', (err, result) => {
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
