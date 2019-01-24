const db=require("../config/connection");
exports.rsvpAns = (req, res) => {
    const newResponse = {
        user: req.user.id,
        response: req.body.response,
        meetup: parseInt(req.params.id_rsvp, 10),
    };
    db.query('SELECT * FROM meetups WHERE id_meetup=$1', [newResponse.meetup])
        .then((result) => {
            if (result.rows.length === 0) {
                return res.status(404).json({ error: 'sorry meetup not found' });
            }
            db.query('INSERT INTO rsvp(meetup,user,response) VALUES($1,$2,$3) returning *',
                [newResponse.meetup, newResponse.user, newResponse.response])
                .then(response=> res.json({ status: 200, response: response.rows }))
                .catch((er) => {
                    console.log(er);
                });
        })
        .catch((error) => {
            console.log(error);
        });
};