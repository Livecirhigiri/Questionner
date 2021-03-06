
const pool = require('../config/connection');
const userValidation=require("../helper/userValidation");
const jwt=require("jsonwebtoken");
const key=require("../config/key");

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
        const { error } = userValidation.validationUser(req.body);
       if(error){
           return res.status(400).json(error.details[0].message);
       }
        const {firstname, lastname, othername, email, phonenumber, username, password} = req.body;

        pool.query(
            'INSERT INTO users (firstname, lastname, othername, email, phonenumber, username,password) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *',
            [firstname, lastname, othername, email, phonenumber, username,password],
            (err, result) => {
                if (err) {
                   console.log(err);
                } else {
                    return res.json({
                        status: 201,
                        data: result.rows
                    });
                }
            },
        );
    },
    signinUser: (req, res) => {
        pool.query('SELECT * FROM users WHERE email=$1 AND password=$2',
            [req.body.email,req.body.password],
            (err, result) => {
                if (err) {
                   console.log(err);
                }
                if(result.rows.length===0){
                    return res.status(401).json({error:"authentication failed"});
                }else{
                    const payload={
                        id:result.rows[0].id_user,
                        password:result.rows[0].password,
                        email:result.rows[0].email,
                    };
                    jwt.sign(payload,key.secret,{expiresIn:'7d'},(errs,token)=>{
                        if(errs){
                            console.log(errs);
                        }
                        return res.status(201).json({token,users:result.rows});
                    });
                }
            });
    },
    updateUser: (req, res) => {
        const id_user = parseInt(req.params.id_user, 10);

        const { firstname, lastname, othername, email, phonenumber, username, registered , isadmin,password
        } = req.body;

        pool.query(
            'UPDATE meetups SET createdon = $1, images = $2, topic = $3 , happeningon=$4, tags=$5 WHERE id_meetup = $6',
            [firstname, lastname, othername, email, phonenumber, username,registered , isadmin,password],
            (err, results) => {
                if (err) {
                    console.log(err);
                }
                res.status(202).json({
                    status: 202,
                    data: [req.body],
                });
            },
        );
    },

registerUser: (req, res) => {
    const { error } = userValidation.validationUser(req.body);
    if (error)
      return res.status(400).send({
        status: 400,
        error: error.details[0].message
 });
    if (!error) {
     const {firstname, lastname, othername, email, phonenumber, username,isadmin,password
} = req.body;
        pool.query(
            'INSERT INTO users (firstname, lastname, othername, email,  phonenumber,  username, isadmin,password) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *',
            [firstname, lastname, othername, email, phonenumber, username,isadmin,password],
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

    deleteUser: (req, res) => {
        const id_user = parseInt(req.params.id_user, 10);

        pool.query(
            'DELETE FROM users WHERE id_user = $1',
            [id_user],
            (err, results) => {
                if (err) {
                   console.log(err);
                }

                res.status(202).json({
                    status: 202,
                    data: `user deleted successfuly`,
                });
            },
        );
    },
};
