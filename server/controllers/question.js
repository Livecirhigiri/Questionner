const pool = require('../config/connection');

module.exports = {


    upvoteQuestion: (req, res) => {
        const id_question = parseInt(req.params.id_question, 10);
        pool.query('SELECT * FROM question WHERE id_question = $1', [id_question], (err, result) => {
            if (err) {
                console.log(err);
            }
            if (result.rows.length === 0) {
                return res.status(404).json({
                    status: 404,
                    error: 'question not found',
                });
            }
            pool.query('INSERT INTO votes (id_user, id_question, votes) VALUES ($1,$2,$3) RETURNING *',
                [1, id_question, true], (err, results) => {
                    if (err) {
                        console.log(err);
                        return res.status(400).json({
                            status: 400,
                            error: error.details[0].message,
                        });
                    }

                    pool.query('SELECT COUNT (*) as upvote FROM votes WHERE votes = $1 AND id_question= $2', [true, id_question], (err, result) => {
                        if (err) {
                            throw err;
                        }
                        res.status(200).json({
                            status: 200,
                            data: result.rows,
                        });
                    });
                });
        });
    },
};
