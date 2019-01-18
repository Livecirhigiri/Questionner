const joi = require('joi');
const Extension = require('joi-date-extensions');

// const mine = joi.extend(Extension);

function validateQuestion(records) {
    const schema = {
        user: joi
            .string()
            .min(2)
            .required(),
        meetup: joi.number().max(5),
        tittle: joi
            .string()
            .min(2)
            .required(),
        body: joi
            .string()
            .min(2)
            .required(),
    };

    return joi.validate(records, schema);
}

const Questions = [
    {
        id: 1,
        createOn: '22/08/2014',
        createdBy: 'Olivia',
        meetup: 1,
        tittle: 'machine learning',
        body: 'Network security',
        votes: 23,
    },

    {
        id: 2,
        createOn: '12/08/2017',
        createdBy: 'Pascal',
        meetup: 2,
        tittle: 'english learning',
        body: 'improve your speaking',
        votes: 37,
    },
];

class question {
    static register(req, res) {
        const { error } = validateQuestion(req.body);
        if (error) {
            return res.status(400).send({
                status: 400,
                error: error.details[0].message,
            });
        }
        if (!error) {
            const newQuestion = {
                id: Questions.length + 1,
                user: req.body.user,
                meetup: req.body.meetup,
                tittle: req.body.tittle,
                body: req.body.body,
            };

            Questions.push(newQuestion);
            return res.status(200).json({ status: 200, data: [newQuestion] });
        }
    }
  }
  static allquestion(req, res) {
    res.status(200).json({
      status: 200,
      data: [Questions]
    });
  }

  static getquestionId(req, res) {
    const questionId = Questions.find(c => c.id === parseInt(req.params.id));
    if (!questionId) {
      res.status(404).json({
        status: 404,
        error: "the user with the given ID was not found"
      });
    } else {
      res.status(200).json({
        status: 200,
        data: [questionId]
      });
    }
  }

  static updateQuestions(req, res) {
    const id = parseInt(req.params.id);
    const some = Questions.find(c => c.id === parseInt(req.params.id));
    if (!some) {
      return res.status(404).json({ error: "sorry question not found." });
    }
    const updateQuestion = {
      id: id,
      createdOn: req.body.createdOn,
      createdBy: req.body.createdBy,
      meetup: req.body.meetup,
      tittle: req.body.tittle,
      body: req.body.body,
      votes: req.body.votes
    };
    const questionId = Questions.indexOf(some);
    const newData = (Questions[questionId] = updateQuestion);
    return res.json({ status: 200, data: [newData] });
  }

  static deleteQuestion(req, res) {
    const id = parseInt(req.params.id);
    const some = Questions.find(question => question.id === id);
    if (!some) {
      return res.status(404).json({ error: "sorry question not found." });
    }
    const del = Questions.indexOf(some);
    Questions.splice(del, 1);
    return res.json({ success: "question removed successfully." });
  }
}

module.exports = question;
