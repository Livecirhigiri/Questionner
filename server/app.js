const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const meetupRoutes = require('./routes/meetupRoutes');
const questionRoutes = require('./routes/questionRoutes');
const rsvpRoutes = require('./routes/rsvpRoutes');

const port = parseInt(process.env.PORT, 10) || 4000;
const app = express();

// routes  to handle requests
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(userRoutes);
app.use(meetupRoutes);
app.use(questionRoutes);
app.use(rsvpRoutes);

app.listen(port, () => {
    console.log('app is listening on port', port);
});

module.exports = app;
