const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const user = require('./routes/user');
const meetup = require('./routes/meetup');
const question = require('./routes/question');
const rsvp = require('./routes/rsvp');
const comment=require("./routes/comment");

const port = parseInt(process.env.PORT, 10) || 4000;
const app = express();

// routes  to handle requests
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1/users', user);
app.use('/api/v1/meetups/', meetup);
app.use('/api/v1/question',question);
app.use(rsvp);
app.use("/api/v1/comment",comment);

/* app.get('/*', (req, res) => res.status(200).send({
        message: 'Welcome to Heroku',
    }),); */

app.listen(port, () => {
    console.log('app is listening on port', port);
});

module.exports = app;
