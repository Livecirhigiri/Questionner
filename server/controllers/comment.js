const joi = require('joi');
const db = require('../config/connection');
const jwt = require('jsonwebtoken');
const keys = require ('../config/key')

exports.create = (req, res) => {
    const header = req.headers.authorization || req.body.token;
    const split = header.split(' ');
    const user = jwt.verify(split[1], keys.secret);
    const newComment = {
       
        comment: req.body.comment,
    };
    db.query('SELECT * FROM question WHERE id_question=$1', [parseInt(req.params.id_question, 10)])
        .then((result) => {
            if (result.rows.length === 0) {
                return res.status(404).json({ error: 'sorry question not found' });
            }
            db.query('INSERT INTO comments(user_id,question_id,comment) VALUES($1,$2,$3) returning *',
                [user.id, parseInt(req.params.id_question, 10), newComment.comment])
                .then(comment => res.json({ status: 201, comment: comment.rows }))
                .catch((er) => {
                    console.log(er);
                });
        })
        .catch((error) => {
            console.log(error);
        });
};
