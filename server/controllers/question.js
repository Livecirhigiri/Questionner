const pool = require('../config/connection');
const questionValid = require('../helper/questionValid');


module.exports = {
    upvoteQuestion: (req, res) => {
            const questionId = parseInt(req.params.id_question, 10);
            pool.query('SELECT * FROM question WHERE id_question = $1', [questionId], (err, result) => {
                if (err) {
                    console.log(err);
                }
                if (result.rows.length === 0) {
                    return res.status(404).json({
                        status: 404,
                        error: 'question not found',
                    });
                }
                pool.query('INSERT INTO question (upvotes,downvotes) VALUES ($1,$2) RETURNING *',
                    [ 1, 0], (err, results) => {
                        if (err) {
                            console.log(err);
                            return res.status(400).json({
                                status: 400,
                                error: 'bad request!',
                            });
                        }

                        pool.query('SELECT COUNT (*) as upvotes FROM question WHERE upvotes = $1 AND question= $2', [1, questionId], (err, result) => {
                            if (err) {
                                throw err;
                            }
                            res.status(202).json({
                                status: 202,
                                data: result.rows,
                            });
                        });
                    });
            });
    },

    downvoteQuestion: (req, res) => {
            const questionId = parseInt(req.params.id_question, 10);
            pool.query('SELECT * FROM question WHERE id_question = $1', [questionId], (err, result) => {
                if (err) {
                    console.log(err);
                }
                if (result.rows.length === 0) {
                    return res.status(404).json({
                        status: 404,
                        error: 'question not found',
                    });
                }
                pool.query('INSERT INTO votes (id_user, question, upvotes,downvotes) VALUES ($1,$2,$3,$4) RETURNING *',
                    [req.user.id, questionId, 0, 1 ], (err, results) => {
                        if (err) {
                            console.log(err);
                            return res.status(400).json({
                                status: 400,
                                error: 'not found oh!',
                            });
                        }

                        pool.query('SELECT COUNT (*) as downvotes FROM votes WHERE downvotes = $1 AND question= $2', [0, questionId], (err, result) => {
                            if (err) {
                                throw err;
                            }
                            res.status(202).json({
                                status: 202,
                                data: result.rows,
                            });
                        });
                    });
            });
    },


    registerQuestion: (req, res) => {
        const { error } = questionValid.validationQuestion(req.body);
        if (error)
          return res.status(400).send({
            status: 400,
            error: error.details[0].message
     });
        if (!error) {
        const { createdby, meetup,tittle, body} = req.body;
        pool.query(
            'INSERT INTO question ( createdby, meetup,tittle, body) VALUES ($1,$2,$3,$4) RETURNING *',
            [ createdby, meetup,tittle, body],
            (err, result) => {
                if (err) {
                    throw err;
                } else {
                    return res.json({
                        status: 201,
                        data: [req.body],
                    });
                }
            },
        );
    }
},

};
