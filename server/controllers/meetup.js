const joi = require("joi");
const Extension = require("joi-date-extensions");
const mine = joi.extend(Extension);

function validateMeetup(records) {
  const schema = {
    createdOn: mine.date().format("YYYY-MM-DD"),
    location: joi
      .string()
      .min(2)
      .required(),
    image: joi
      .string()
      .min(2)
      .required(),
    topic: joi
      .string()
      .min(2)
      .required(),
    happenningOn: mine.date().format("YYYY-MM-DD"),
    tags: joi.string().min(2)
  };

  return joi.validate(records, schema);
}

const meetUps = [
  {
    id: 1,
    createdOn: "22/12/2018",
    location: "DRC",
    image: "C/mesImages/Bootcamp",
    topic: "Andela Bootcamp",
    happenningOn: "2019-01-25",
    tags: "Andela HomeStudy"
  },
  {
    id: 2,
    createdOn: "25/02/2018",
    location: "Kigali",
    image: "C/mesImages/Familly",
    topic: "white party",
    happenningOn: "2017-05-19",
    tags: "family first"
  },
  {
    id: 3,
    createdOn: "2/08/2016",
    location: "Goma",
    image: "C/mesImages/Beni",
    topic: "DRC elections",
    happenningOn: "2019-08-09",
    tags: "Beni people"
  }
];

class meetup {
  static register(req, res) {
    if (!isNaN(req.body.happeningOn))
      return res.status(400).send({
        status: 400,
        error: "Invalid Date"
      });
    const { error } = validateMeetup(req.body);
    if (error)
      return res.status(400).send({
        status: 400,
        error: error.details[0].message
      });
    if (!error) {
      const newMeetup = {
        id: meetUps.length + 1,
        createdOn: req.body.createdOn,
        topic: req.body.topic,
        location: req.body.location,
        happenningOn: req.body.happenningOn,
        Tags: req.body.body
      };

      meetUps.push(newMeetup);
      return res.status(200).json({ status: 200, data: [newMeetup] });
    }
  }
  static allmeetup(req, res) {
    res.status(200).json({
      status: 200,
      data: [meetUps]
    });
  }

  static meetupId(req, res) {
    const meetupId = meetUps.find(c => c.id === parseInt(req.params.id));
    if (!meetup) {
      res.status(404).json({
        status: 404,
        error: "the user with the given ID was not found"
      });
    } else {
      res.status(200).json({
        status: 200,
        data: [meetupId]
      });
    }
  }

  static updateMeetup(req, res) {
    const { error } = validateMeetup(req.body);
    const id = parseInt(req.params.id);
    const some = meetUps.find(c => c.id === parseInt(req.params.id));
    if (!some) {
      return res.status(404).json({ error: "sorry question not found." });
    }
    if (error)
      return res.status(400).send({
        status: 400,
        error: error.details[0].message
      });
    if (!error) {
      const updateMeetup = {
        id: meetUps.length + 1,
        createdOn: req.body.createdOn,
        topic: req.body.topic,
        location: req.body.location,
        happenningOn: req.body.happenningOn,
        Tags: req.body.body
      };
      const meetupId = meetUps.indexOf(some);
      const newMeetup = (meetUps[meetupId] = updateMeetup);
      return res.json({ status: 200, data: [newMeetup] });
    }
  }
  static deleteMeetup(req, res) {
    const id = parseInt(req.params.id);
    const some = meetUps.find(c => c.id === id);
    if (!some) {
      return res.status(404).json({ error: "sorry question not found." });
    }
    const del = meetUps.indexOf(some);
    meetUps.splice(del, 1);
    return res.json({ success: "question removed successfully." });
  }
}

module.exports = meetup;
