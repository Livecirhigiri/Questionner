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

    signupUser: (req, res) => {
        const {
 firstname, lastname, othername, email, phonenumber, username,registered , isadmin
} = req.body;
        pool.query(
            'INSERT INTO users (firstname, lastname, othername, email, phonenumber, username,registered , isadmin) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *',
            [firstname, lastname, othername, email, phonenumber, username,registered , isadmin],
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
    },
    signinUser: (req, res) => {
        const { email, username} = req.body;
        pool.query(
            'INSERT INTO users ( email, username) VALUES ($1,$2) RETURNING *',
            [ email, username],
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
    },
    updateUser: (req, res) => {
        const id_user = parseInt(req.params.id_user, 10);

        const {
            firstname, lastname, othername, email, phonenumber, username,registered , isadmin
} = req.body;

        pool.query(
            'UPDATE meetups SET createdon = $1, images = $2, topic = $3 , happeningon=$4, tags=$5 WHERE id_meetup = $6',
            [firstname, lastname, othername, email, phonenumber, username,registered , isadmin],
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
    },


    deleteUser: (req, res) => {
        const id_user = parseInt(req.params.id_user, 10);

        pool.query(
            'DELETE FROM users WHERE id_user = $1',
            [id_user],
            (err, results) => {
                if (err) {
                    throw err;
                }

                res.status(200).json({
                    status: 200,
                    data: `user deleted with ID: ${id_user}`,
                });
            },
        );
    },
};
