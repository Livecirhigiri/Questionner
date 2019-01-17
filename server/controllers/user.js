const joi = require("joi");

function validatePost(records) {
  const schema = {
    firstname: joi
      .string()
      .min(2)
      .required(),
    lastname: joi
      .string()
      .min(2)
      .required(),
    othername: joi.string().min(2),
    email: joi
      .string()
      .email({ minDomainAtoms: 2 })
      .required(),
    phoneNumber: joi
      .number()
      .min(5)
      .max(9),
    username: joi
      .string()
      .min(2)
      .max(15)
      .required(),
    registered: joi
      .number()
      .integer()
      .min(1990)
      .max(2019),
    isAdmin: joi
      .boolean()
      .invalid(false)
      .required()
  };

  return joi.validate(records, schema);
}

const users = [
  {
    id: 1,
    firstname: "Willy",
    lastname: "Akilimali",
    othrname: "Booba",
    email: "willycirh@gmail.com",
    phoneNumber: "884503457",
    username: "willyAk",
    registered: 12 / 4 / 2013,
    isAdmin: true
  },
  {
    id: 2,
    firstname: "marie",
    lastname: "iragi",
    othername: "louise",
    email: "marcirh@gmail.com",
    phoneNumber: "8845043257",
    username: "marieLoui",
    registered: 2 / 04 / 2016,
    isAdmin: false
  },
  {
    id: 3,
    firstname: "Gloire",
    lastname: "Bahogw",
    othrname: "Bugati",
    email: "gloireBah@gmail.com",
    phoneNumber: "88498057",
    username: "gloireBah",
    registered: 22 / 04 / 2018,
    isAdmin: false
  }
];

class user {
  static register(req, res) {
    const { error } = validatePost(req.body);
    if (error)
      return res.status(400).send({
        status: 400,
        error: error.details[0].message
      });
    if (!error) {
      const newUser = {
        id: users.length + 1,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        othername: req.body.othername,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        username: req.body.username,
        registered: req.body.registered,
        isAdmin: req.body.isAdmin
      };
      users.push(newUser);
      return res.status(200).json({ status: 200, data: [newUser] });
    }
  }
  static allUsers(req, res) {
    res.status(200).json({
      status: 200,
      data: [users]
    });
  }

  static updateUsers(req, res) {
    const id = parseInt(req.params.id);
    const some = users.find(user => user.id === id);
    if (!some) {
      return res.status(404).json({ error: "sorry user not found." });
    }
    const { error } = validatePost(req.body);
    if (error)
      return res.status(400).send({
        status: 400,
        error: error.details[0].message
      });
    if (!error) {
      const updateUser = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        othername: req.body.othername,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        username: req.body.username,
        registered: req.body.registered,
        isAdmin: req.body.isAdmin
      };
      const userId = users.indexOf(some);
      const newData = (users[userId] = updateUser);
      return res.json({ status: 200, data: [newData] });
    }
  }

  static getUserId(req, res) {
    const userId = users.find(c => c.id === parseInt(req.params.id));
    if (!userId) {
      res.status(404).json({
        status: 404,
        error: "the user with the given ID was not found"
      });
    } else {
      res.status(200).json({
        status: 200,
        data: [userId]
      });
    }
  }

  static deleteUser(req, res) {
    const id = parseInt(req.params.id);
    const some = users.find(user => user.id === id);
    if (!some) {
      return res.status(404).json({ error: "sorry user not found." });
    }
    const del = users.indexOf(some);
    users.splice(del, 1);
    return res.json({ success: "user removed successfully." });
  }
}

module.exports = user;
